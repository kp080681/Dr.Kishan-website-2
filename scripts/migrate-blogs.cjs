const fs = require("fs");
const path = require("path");
const https = require("https");

const POSTS = [
  "The-Latest-Advancements-in-Pancreatic-Surgery-A-Breakthrough-in-Treatment",
  "Common-Pancreatic-Disorders-and-the-Need-for-Surgical-Interventions",
  "Common-Conditions-Treated-with-Laparoscopic-Surgery-Exploring-the-Options",
  "The-Latest-Advancements-in-Varicose-Vein-Surgery-What-You-Need-to-Know",
  "The-5-Key-Benefits-of-Laparoscopic-Hernia-Repair-You-Need-to-Know",
  "Finding-Relief-Surgical-Solutions-for-Chronic-Diabetic-Ulcers",
  "Common-Types-of-Hernias-and-How-to-Prevent-Them",
  "Innovations-in-Breast-Cancer-Care-Advances-in-Mastectomy-Techniques",
  "Understanding-Hernias-Causes-Symptoms-and-Treatment-Options",
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0 DrKishanMigration/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(fetchText(res.headers.location));
        }
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve({ status: res.statusCode || 0, data }));
      })
      .on("error", reject);
  });
}

function decode(html) {
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripTags(html) {
  return decode(html.replace(/<[^>]+>/g, " ").replace(/[ \t]+/g, " ").trim());
}

function htmlToMarkdown(html) {
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n# ${stripTags(t)}\n\n`);
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${stripTags(t)}\n\n`);
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${stripTags(t)}\n\n`);
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${stripTags(t)}\n\n`);
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `\n- ${stripTags(t)}`);
  s = s.replace(/<\/(ul|ol)>/gi, "\n\n");
  s = s.replace(/<(ul|ol)[^>]*>/gi, "\n");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n\n${stripTags(t)}\n\n`);
  s = s.replace(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi, "\n\n![image]($1)\n\n");
  s = s.replace(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => `[${stripTags(t)}](${href})`);
  s = decode(s.replace(/<[^>]+>/g, "\n"));
  return s
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractBetween(html, startRe, endRe) {
  const start = html.search(startRe);
  if (start < 0) return "";
  const rest = html.slice(start);
  const end = rest.search(endRe);
  return end > 0 ? rest.slice(0, end) : rest;
}

function slugify(oldSlug) {
  return oldSlug
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseDate(text) {
  const m = text.match(/Last Updated:\s*([0-9]{1,2}\s+\w+\s+[0-9]{4})/i);
  if (!m) return null;
  const d = new Date(m[1]);
  return Number.isNaN(d.getTime()) ? m[1] : d.toISOString().slice(0, 10);
}

function extractHeadings(md) {
  return md
    .split("\n")
    .filter((l) => /^#{1,4}\s+/.test(l))
    .map((l) => {
      const level = l.match(/^#+/)[0].length;
      const text = l.replace(/^#+\s+/, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      return { level, text, id };
    });
}

function downloadImage(url, dest) {
  return new Promise((resolve) => {
    if (!url || url.startsWith("data:")) return resolve(null);
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          return resolve(downloadImage(res.headers.location, dest));
        }
        if (res.statusCode !== 200) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          return resolve(null);
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", () => {
        try {
          fs.unlinkSync(dest);
        } catch {}
        resolve(null);
      });
  });
}

(async () => {
  const outDir = path.join(process.cwd(), "content", "blogs");
  const imgDir = path.join(process.cwd(), "public", "images", "blogs");
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(imgDir, { recursive: true });

  const inventory = [];
  const posts = [];

  for (const oldSlug of POSTS) {
    const url = `https://surgeonkishan.com/post/${oldSlug}`;
    console.log("Fetching", url);
    const { status, data } = await fetchText(url);
    if (status !== 200) {
      inventory.push({ oldSlug, url, status: "unavailable", httpStatus: status });
      continue;
    }

    const titleMatch = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? stripTags(titleMatch[1]) : oldSlug.replace(/-/g, " ");
    const author = "Dr. Kishan Rao";
    const updatedAt = parseDate(data);

    let bodyHtml =
      extractBetween(data, /<article[\s\S]*?>/i, /<\/article>/i) ||
      extractBetween(
        data,
        /class=["'][^"']*blog-post[^"']*["']/i,
        /Related Posts|Move to Top|Newsletter/i,
      ) ||
      extractBetween(data, /<h1[\s\S]*?<\/h1>/i, /Related Posts|How Can We Assist You\?/i);

    if (!bodyHtml || bodyHtml.length < 200) bodyHtml = data;

    const imgUrls = [...bodyHtml.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map((m) => m[1]);
    const localImages = [];
    for (let i = 0; i < imgUrls.length; i++) {
      const raw = imgUrls[i];
      const src = raw.startsWith("//") ? `https:${raw}` : raw;
      let ext = ".jpg";
      try {
        ext = path.extname(new URL(src, url).pathname) || ".jpg";
      } catch {}
      const filename = `${slugify(oldSlug)}-${i + 1}${ext.split("?")[0] || ".jpg"}`;
      const dest = path.join(imgDir, filename);
      const saved = await downloadImage(src, dest);
      if (saved) {
        localImages.push({ original: src, local: `/images/blogs/${filename}` });
        bodyHtml = bodyHtml.split(raw).join(`/images/blogs/${filename}`);
      } else {
        localImages.push({ original: src, local: null, missing: true });
      }
    }

    let markdown = htmlToMarkdown(bodyHtml);
    const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    markdown = markdown.replace(new RegExp(`^#\\s+${escaped}\\s*`, "i"), "").trim();

    const slug = slugify(oldSlug);
    const headings = extractHeadings(`# ${title}\n\n${markdown}`);
    const excerpt =
      markdown.replace(/^#.+$/m, "").replace(/\s+/g, " ").trim().slice(0, 180) + "…";

    const record = {
      slug,
      title,
      author,
      publishedAt: updatedAt,
      updatedAt,
      oldSlug,
      originalUrl: url,
      medicalReviewStatus: "pending",
      migrationStatus: "migrated",
      excerpt,
      headings: headings.filter((h) => h.level > 1),
      images: localImages,
      bodyMarkdown: markdown,
      sourceNote:
        "Migrated verbatim from surgeonkishan.com. Not newly medically reviewed.",
    };

    fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(record, null, 2));
    posts.push({
      slug: record.slug,
      title: record.title,
      author: record.author,
      publishedAt: record.publishedAt,
      updatedAt: record.updatedAt,
      oldSlug: record.oldSlug,
      originalUrl: record.originalUrl,
      medicalReviewStatus: record.medicalReviewStatus,
      excerpt: record.excerpt,
      headings: record.headings,
    });
    inventory.push({
      title,
      oldSlug,
      slug,
      originalUrl: url,
      author,
      publishedAt: updatedAt,
      headingsCount: record.headings.length,
      images: localImages,
      migrationStatus: "migrated",
      medicalReviewStatus: "pending",
    });
    console.log("Migrated", slug, "bodyChars", markdown.length, "images", localImages.length);
  }

  fs.writeFileSync(path.join(outDir, "inventory.json"), JSON.stringify(inventory, null, 2));
  fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(posts, null, 2));
  console.log("Done", posts.length, "posts");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

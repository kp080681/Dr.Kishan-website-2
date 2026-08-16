import { blogs, type BlogHeading, type BlogImage, type BlogPost } from "../content/blogs";

export type { BlogHeading, BlogImage, BlogPost };

export type BlogIndexItem = Omit<
  BlogPost,
  "bodyMarkdown" | "images" | "sourceNote" | "migrationStatus"
> & {
  excerpt: string;
};

function isPublicPost(post: BlogPost) {
  return post.migrationStatus === "new";
}

function isOldBookingHeading(text: string) {
  const normalized = text
    .toLowerCase()
    .replace(/[?:]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return (
    normalized.startsWith("how may we assist") ||
    normalized.startsWith("how can we assist") ||
    normalized.startsWith("how can we help") ||
    normalized.startsWith("how we can help") ||
    normalized.startsWith("how may we be of assistance")
  );
}

function cleanExcerpt(summary: string, bodyMarkdown: string) {
  const withoutMigrationResidue = summary
    .replace(/^Dr\.?\s*Kishan\s*Rao\s*\|\s*Last Updated:\s*\d{1,2}\s+[A-Za-z]+\s+\d{4}\s*/i, "")
    .replace(/Table of Content\b/gi, "")
    .replace(/â€¦/g, "...")
    .replace(/\s+/g, " ")
    .trim();

  if (withoutMigrationResidue && !/^[-:]/.test(withoutMigrationResidue)) {
    return withoutMigrationResidue;
  }

  const fallback = bodyMarkdown
    .replace(/Dr\.?\s*Kishan\s*Rao\s*\|\s*Last Updated:[^\n]+/i, "")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .split("\n")
    .map((line) => line.replace(/^#{1,4}\s+/, "").replace(/^[-*]\s+/, "").trim())
    .find(
      (line) =>
        line.length > 80 &&
        !/^Table of Content/i.test(line) &&
        !isOldBookingHeading(line),
    );

  return fallback ?? withoutMigrationResidue;
}

export function getBlogIndex(): BlogIndexItem[] {
  return blogs
    .filter(isPublicPost)
    .map((post) => ({
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      excerpt: cleanExcerpt(post.summary, post.bodyMarkdown),
      publishedAt: post.publishedAt,
      category: post.category,
      featuredImage: post.featuredImage,
      author: post.author,
      updatedAt: post.updatedAt,
      oldSlug: post.oldSlug,
      originalUrl: post.originalUrl,
      medicalReviewStatus: post.medicalReviewStatus,
      headings: post.headings,
    }))
    .sort((a, b) => {
      const da = a.publishedAt || "";
      const db = b.publishedAt || "";
      return db.localeCompare(da);
    });
}

export function getBlogSlugs(): string[] {
  return getBlogIndex().map((p) => p.slug);
}

export function getBlogPost(slug: string): BlogPost | null {
  const post = blogs.find((item) => item.slug === slug);
  return post && isPublicPost(post) ? post : null;
}

export function getLegacyRedirects(): Array<{ source: string; destination: string; permanent: boolean }> {
  return getBlogIndex().map((post) => ({
    source: `/post/${post.oldSlug}`,
    destination: `/blogs/${post.slug}`,
    permanent: true,
  }));
}

/** Minimal markdown -> HTML for migrated posts (headings, paragraphs, lists, links, images). */
export function renderBlogMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let inList = false;
  let inImportedToc = false;

  const flushList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  const inline = (text: string) =>
    text
      .replace(/\bDr\.?\s*Kishan\s*Rao\b/g, "Dr. Kishan Rao")
      .replace(/\bDr\s+kishan\s+rao\b/gi, "Dr. Kishan Rao")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="my-4 rounded-[var(--radius)]" />')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue underline underline-offset-2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushList();
      continue;
    }
    if (/Dr\.?\s*Kishan\s*Rao\s*\|\s*Last Updated:/i.test(line.trim())) {
      flushList();
      continue;
    }
    if (/^Table of Content\b/i.test(line.trim())) {
      flushList();
      inImportedToc = true;
      continue;
    }
    if (/^!\[[^\]]*]\([^)]+\)$/.test(line.trim())) {
      flushList();
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushList();
      const level = heading[1].length;
      const text = heading[2].trim();
      if (isOldBookingHeading(text)) {
        break;
      }
      inImportedToc = false;
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      html.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
      continue;
    }
    if (inImportedToc) {
      continue;
    }
    if (/surgeonkishan\.dayschedule\.com\/book-appointment/i.test(line)) {
      flushList();
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inline(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }
    flushList();
    html.push(`<p>${inline(line.trim())}</p>`);
  }
  flushList();
  return html.join("\n");
}

import { blogs, type BlogHeading, type BlogImage, type BlogPost } from "../content/blogs";

export type { BlogHeading, BlogImage, BlogPost };

export type BlogIndexItem = Omit<
  BlogPost,
  "bodyMarkdown" | "images" | "sourceNote" | "migrationStatus"
> & {
  excerpt: string;
};

export function getBlogIndex(): BlogIndexItem[] {
  return blogs
    .map((post) => ({
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      excerpt: post.summary,
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
  return blogs.find((post) => post.slug === slug) ?? null;
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

  const flushList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  const inline = (text: string) =>
    text
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
    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      html.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
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

import type { Metadata } from "next";
import Link from "next/link";
import { getBlogIndex } from "@/lib/blogs";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Educational surgical articles by Dr. Kishan Rao. Migrated from surgeonkishan.com and pending medical review.",
};

export default function BlogsIndexPage() {
  const posts = getBlogIndex();

  return (
    <SiteShell>
      <section className="section-pad pt-[calc(var(--header-h)+2rem)]">
        <div className="container-site">
          <div className="section-head max-w-3xl">
            <p className="eyebrow">Blogs</p>
            <h1 className="heading-display heading-xl">Educational articles</h1>
            <p className="lede">
              These articles were migrated from surgeonkishan.com. Content is preserved for continuity and
              marked pending medical review before clinical claims should be treated as current guidance.
            </p>
          </div>

          <div className="section-content grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-[var(--card-pad)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-red">
                  Medical review pending
                </p>
                {post.publishedAt ? (
                  <p className="mt-2 text-sm text-ink-muted">
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                ) : null}
                <h2 className="heading-display heading-card mt-3">
                  <Link href={`/blogs/${post.slug}`} className="hover:text-blue">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-5 text-sm font-semibold text-blue hover:underline"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

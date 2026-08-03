import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { IconArrow } from "@/components/icons";
import { getBlogIndex } from "@/lib/blogs";

export function Blogs() {
  const posts = getBlogIndex().slice(0, 3);

  return (
    <section
      id="blogs"
      className="living-section section-pad bg-[linear-gradient(180deg,rgba(240,236,230,0.7)_0%,#f7f5f2_100%)]"
      aria-labelledby="blogs-heading"
    >
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Blogs</p>
          <h2 id="blogs-heading" className="heading-display heading-xl">
            Educational topics for patients and learners
          </h2>
          <p className="lede">
            Recent articles migrated from the previous website. Each post remains pending medical review
            on this site.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal
              key={post.slug}
              as="article"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className="motion-card flex h-full flex-col rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-[var(--card-pad)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-red">
                Medical review pending
              </p>
              {post.publishedAt ? (
                <p className="mt-2 text-sm text-ink-muted">
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              ) : null}
              <h3 className="heading-display heading-card mt-3">
                <Link href={`/blogs/${post.slug}`} className="hover:text-blue">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
              <Link
                href={`/blogs/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue"
              >
                Read article
                <IconArrow className="motion-link-arrow h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/blogs" className="btn btn-secondary">
            View all blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

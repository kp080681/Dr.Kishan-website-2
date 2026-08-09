import Link from "next/link";
import Image from "next/image";
import { ExpandablePanel } from "@/components/expandable-panel";
import { Reveal } from "@/components/reveal";
import { IconArrow } from "@/components/icons";
import { getBlogIndex } from "@/lib/blogs";

export function Blogs() {
  const posts = getBlogIndex();
  const featuredPosts = posts.slice(0, 3);
  const remainingPosts = posts.slice(3);
  const getFeaturedImagePosition = (src: string) =>
    src.startsWith("/images/gallery/originals/") ? "center top" : "center";

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
            Clear patient-education articles on surgical conditions, treatment options and
            recovery.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <Reveal
              key={post.slug}
              as="article"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className="motion-card group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: getFeaturedImagePosition(post.featuredImage) }}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-[var(--card-pad)]">
                {post.publishedAt ? (
                  <p className="text-sm text-ink-muted">
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
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue"
                >
                  Read article
                  <IconArrow className="motion-link-arrow h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {remainingPosts.length > 0 ? (
          <ExpandablePanel className="mt-8" label="View all blogs">
            <div className="grid gap-3 rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-4 sm:p-5">
              {remainingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="grid gap-2 rounded-[var(--radius-sm)] bg-surface p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                >
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-navy">
                      <Link href={`/blogs/${post.slug}`} className="hover:text-blue">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue"
                  >
                    Read article
                    <IconArrow className="motion-link-arrow h-4 w-4" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </ExpandablePanel>
        ) : null}
      </div>
    </section>
  );
}

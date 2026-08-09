import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogIndex } from "@/lib/blogs";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Educational surgical articles by Dr. Kishan Rao for patients and learners.",
};

export default function BlogsIndexPage() {
  const posts = getBlogIndex();
  const getFeaturedImagePosition = (src: string) =>
    src.startsWith("/images/gallery/originals/") ? "center top" : "center";

  return (
    <SiteShell>
      <section className="section-pad pt-[calc(var(--header-h)+2rem)]">
        <div className="container-site">
          <div className="section-head max-w-3xl">
            <p className="eyebrow">Blogs</p>
            <h1 className="heading-display heading-xl">Educational articles</h1>
            <p className="lede">
              Clear patient-education articles on surgical conditions, treatment options and
              recovery.
            </p>
          </div>

          <div className="section-content grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white"
              >
                <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: getFeaturedImagePosition(post.featuredImage) }}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-[var(--card-pad)]">
                  {post.publishedAt ? (
                    <p className="text-sm text-ink-muted">
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
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="mt-5 text-sm font-semibold text-blue hover:underline"
                  >
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

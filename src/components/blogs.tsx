import Link from "next/link";
import Image from "next/image";
import { ExpandablePanel } from "@/components/expandable-panel";
import { Reveal } from "@/components/reveal";
import { IconArrow } from "@/components/icons";
import { getBlogIndex } from "@/lib/blogs";

export function Blogs() {
  const posts = getBlogIndex();
  const prioritySlugs = [
    "laser-treatment-varicose-veins",
    "how-to-prevent-hemorrhoids",
    "how-to-manage-a-hernia",
  ];
  const priorityPosts = prioritySlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is (typeof posts)[number] => Boolean(post));
  const featuredPosts = priorityPosts.length === 3 ? priorityPosts : posts.slice(0, 3);
  const featuredSlugs = new Set(featuredPosts.map((post) => post.slug));
  const remainingPosts = posts.filter((post) => !featuredSlugs.has(post.slug));
  const editorialImages: Record<string, string> = {
    "laser-treatment-varicose-veins": "/images/blogs/editorial/blog-varicose-evla-editorial-art.jpg",
    "how-to-prevent-hemorrhoids": "/images/blogs/editorial/blog-hemorrhoids-habits-editorial-art.jpg",
    "how-to-manage-a-hernia": "/images/blogs/editorial/blog-hernia-editorial-art.jpg",
  };

  return (
    <section
      id="blogs"
      className="blogs-editorial-section section-pad"
      aria-labelledby="blogs-heading"
    >
      <div className="container-site">
        <div className="blogs-editorial-layout">
          <Reveal className="section-head blogs-editorial-head">
          <p className="eyebrow">Blogs</p>
          <h2 id="blogs-heading" className="heading-display heading-xl">
            Educational topics for patients and learners
          </h2>
          <p className="lede">
            Clear patient-education articles on surgical conditions, treatment options and
            recovery.
          </p>
            <Link href="/blogs" className="blogs-editorial-view-all">
              View all articles
              <IconArrow className="motion-link-arrow h-4 w-4" aria-hidden />
            </Link>
          </Reveal>

          <div className="blog-editorial-grid">
          {featuredPosts.map((post, index) => (
            <Reveal
              key={post.slug}
              as="article"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className={`group blog-editorial-card ${
                index === 0 ? "blog-editorial-card--lead" : ""
              }`}
            >
              <div className="blog-editorial-card__media relative">
                <Image
                  src={editorialImages[post.slug] ?? post.featuredImage}
                  alt=""
                  fill
                  className="transition duration-500 group-hover:scale-[1.035]"
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 58vw, 100vw"
                      : "(min-width: 1024px) 32vw, 100vw"
                  }
                />
              </div>
              <div className="blog-editorial-card__body">
                <div className="blog-editorial-card__meta">
                  {post.category ? <span>{post.category}</span> : null}
                  {post.publishedAt ? (
                    <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                    </time>
                  ) : null}
                </div>
                <h3 className="heading-display blog-editorial-card__title">
                  <Link href={`/blogs/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="blog-editorial-card__excerpt">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="blog-editorial-card__link"
                >
                  Read article
                  <IconArrow className="motion-link-arrow h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          ))}
          </div>
        </div>

        {remainingPosts.length > 0 ? (
          <ExpandablePanel
            className="blogs-editorial-more"
            controlsClassName="expandable-trigger--on-dark"
            label="View all blogs"
          >
            <div className="blogs-editorial-more__grid">
              {remainingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="blogs-editorial-row"
                >
                  <div>
                    <div className="blog-editorial-card__meta">
                      {post.category ? <span>{post.category}</span> : null}
                      {post.publishedAt ? (
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                      ) : null}
                    </div>
                    <h3>
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="blogs-editorial-row__link"
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

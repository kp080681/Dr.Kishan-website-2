import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { getBlogPost, getBlogSlugs, renderBlogMarkdown } from "@/lib/blogs";
import { doctor } from "@/content/site";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { createArticleSchema, createBreadcrumbSchema } from "@/lib/schema";
import { canonicalPath } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const relatedConditionByBlogSlug: Record<string, { href: string; label: string }> = {
  "laser-treatment-varicose-veins": {
    href: "/conditions/varicose-veins",
    label: "Varicose Veins",
  },
  "how-to-manage-a-hernia": {
    href: "/conditions/hernia",
    label: "Hernia",
  },
  "how-to-prevent-hemorrhoids": {
    href: "/conditions/piles-hemorrhoids",
    label: "Piles (Hemorrhoids)",
  },
};

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

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog" };
  const title = post.seoTitle ?? post.title;
  const description = post.metaDescription ?? post.summary;
  const canonical = canonicalPath(`/blogs/${post.slug}`);
  const imageAlt = post.featuredImageAlt ?? post.title;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.openGraphTitle ?? title,
      description: post.openGraphDescription ?? description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt ?? undefined,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const html = renderBlogMarkdown(post.bodyMarkdown);
  const publicHeadings = post.headings.filter((heading) => !isOldBookingHeading(heading.text));
  const featuredImagePosition = post.featuredImage.startsWith("/images/gallery/originals/")
    ? "center top"
    : "center";
  const articleSchema = createArticleSchema(post);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blogs", item: "/blogs" },
    { name: post.title, item: `/blogs/${post.slug}` },
  ]);
  const relatedCondition = relatedConditionByBlogSlug[post.slug];

  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="section-pad pt-[calc(var(--header-h)+2rem)]">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div>
            <p className="eyebrow">Blog</p>
            <h1 className="heading-display heading-xl mt-3 max-w-4xl">{post.title}</h1>
            <p className="mt-4 text-sm text-ink-muted">
              {post.author}
              {post.publishedAt
                ? ` - ${new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}`
                : ""}
            </p>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-surface">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt ?? post.title}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: featuredImagePosition }}
                sizes="(min-width: 1024px) 860px, 100vw"
              />
            </div>

            <div className="prose-blog mt-8" dangerouslySetInnerHTML={{ __html: html }} />

            <div className="mt-10 rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-[var(--card-pad)]">
              <h2 className="heading-display heading-card">Medical disclaimer</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                This article is for general education only and is not a substitute for personal
                medical advice, diagnosis or treatment. Always consult a qualified clinician for
                individual care decisions.
              </p>
            </div>

            <div className="surface-dark mt-8 rounded-[var(--radius)] bg-[linear-gradient(135deg,#0b1c33_0%,#14386c_100%)] p-[var(--card-pad)]">
              <h2 className="heading-display heading-card">Book a consultation</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
                Speak with {doctor.name} about your symptoms and next steps. Appointments are by
                prior booking.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${doctor.phoneTel}`} className="btn btn-accent">
                  <IconPhone className="h-4 w-4" aria-hidden />
                  Call
                </a>
                <a
                  href={doctor.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <IconWhatsApp className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-[calc(var(--header-h)+1rem)] rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-5">
              <p className="text-sm font-semibold text-navy">Table of contents</p>
              <nav className="mt-3 space-y-2" aria-label="Article contents">
                {publicHeadings.length ? (
                  publicHeadings.map((h) => (
                    <a
                      key={h.id + h.text}
                      href={`#${h.id}`}
                      className={`block text-sm text-ink-muted hover:text-blue ${
                        h.level > 2 ? "pl-3" : ""
                      }`}
                    >
                      {h.text}
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-ink-muted">Headings will appear when available.</p>
                )}
              </nav>
              <Link href="/blogs" className="mt-5 inline-block text-sm font-semibold text-blue">
                All blogs
              </Link>
              {relatedCondition ? (
                <Link
                  href={relatedCondition.href}
                  className="mt-3 block text-sm font-semibold text-blue hover:underline"
                >
                  Related condition: {relatedCondition.label}
                </Link>
              ) : null}
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getBlogPost, getBlogSlugs, renderBlogMarkdown } from "@/lib/blogs";
import { doctor } from "@/content/site";
import { IconPhone, IconWhatsApp } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const html = renderBlogMarkdown(post.bodyMarkdown);

  return (
    <SiteShell>
      <article className="section-pad pt-[calc(var(--header-h)+2rem)]">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div>
            <p className="eyebrow">Blog</p>
            <h1 className="heading-display heading-xl mt-3 max-w-4xl">{post.title}</h1>
            <p className="mt-4 text-sm text-ink-muted">
              {post.author}
              {post.publishedAt
                ? ` · ${new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}`
                : ""}
            </p>
            <p className="mt-3 inline-flex rounded-full bg-red-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-red">
              Medical review pending
            </p>

            <div
              className="prose-blog mt-8"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <div className="mt-10 rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-[var(--card-pad)]">
              <h2 className="heading-display heading-card">Medical disclaimer</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                This article was migrated from the previous website and has not been newly medically
                reviewed for this site. It is for general education only and is not a substitute for
                personal medical advice, diagnosis or treatment. Always consult a qualified clinician for
                individual care decisions.
              </p>
            </div>

            <div className="surface-dark mt-8 rounded-[var(--radius)] bg-[linear-gradient(135deg,#0b1c33_0%,#14386c_100%)] p-[var(--card-pad)]">
              <h2 className="heading-display heading-card">Book a consultation</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
                Speak with {doctor.name} about your symptoms and next steps. Appointments are by prior
                booking.
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
                {post.headings.length ? (
                  post.headings.map((h) => (
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
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}

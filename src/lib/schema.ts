import { books, doctor, images, locations } from "@/content/site";
import type { BlogPost } from "@/content/blogs";
import { absoluteUrl, siteName } from "@/lib/seo";

type ListItemInput = {
  name: string;
  item: string;
};

const physicianId = absoluteUrl("/#physician");
const websiteId = absoluteUrl("/#website");

function directionsUrl(location: (typeof locations)[number]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${location.name}, ${location.address}`,
  )}`;
}

function placeId(location: (typeof locations)[number]) {
  return absoluteUrl(`/#place-${location.id}`);
}

function bookId(title: string) {
  return absoluteUrl(`/#book-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`);
}

export function createGlobalSchema() {
  const socialUrls = [doctor.social.instagram, doctor.social.facebook, doctor.social.youtube];

  const placeNodes = locations.map((location) => ({
    "@type": "Place",
    "@id": placeId(location),
    name: location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressCountry: "IN",
    },
    hasMap: directionsUrl(location),
  }));

  const bookNodes = books.map((book) => ({
    "@type": "Book",
    "@id": bookId(book.title),
    name: book.title,
    description: book.note,
    image: absoluteUrl(book.coverImage),
    author: {
      "@id": physicianId,
    },
    url: "pdfHref" in book ? absoluteUrl(book.pdfHref) : absoluteUrl("/#books"),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteName,
        url: absoluteUrl("/"),
        inLanguage: "en-IN",
        publisher: {
          "@id": physicianId,
        },
      },
      {
        "@type": ["Person", "Physician"],
        "@id": physicianId,
        name: doctor.brandName,
        alternateName: doctor.name,
        honorificPrefix: "Dr.",
        jobTitle: doctor.primaryRole,
        description: `${doctor.credentials} - ${doctor.primaryRole}`,
        url: absoluteUrl("/"),
        telephone: doctor.phoneDisplay,
        email: doctor.email,
        image: absoluteUrl(images.logo.src),
        logo: absoluteUrl(images.logo.src),
        sameAs: socialUrls,
        medicalSpecialty: ["General surgery", "Laparoscopic surgery", "LASER surgery"],
        hasCredential: doctor.credentials.split(", ").map((credential) => ({
          "@type": "EducationalOccupationalCredential",
          name: credential,
        })),
        workLocation: locations.map((location) => ({
          "@id": placeId(location),
        })),
        subjectOf: bookNodes.map((book) => ({
          "@id": book["@id"],
        })),
      },
      ...placeNodes,
      ...bookNodes,
    ],
  };
}

export function createArticleSchema(post: BlogPost) {
  const canonical = absoluteUrl(`/blogs/${post.slug}`);
  const title = post.seoTitle ?? post.title;
  const description = post.metaDescription ?? post.summary;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: post.title,
    name: title,
    description,
    image: absoluteUrl(post.featuredImage),
    author: {
      "@id": physicianId,
      name: post.author,
    },
    publisher: {
      "@id": physicianId,
    },
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? post.publishedAt ?? undefined,
    mainEntityOfPage: canonical,
    url: canonical,
    isPartOf: {
      "@id": websiteId,
    },
    inLanguage: "en-IN",
  };
}

export function createBreadcrumbSchema(items: ListItemInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}

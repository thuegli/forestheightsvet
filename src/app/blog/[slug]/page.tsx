import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../posts";
import PhoneLink from "@/components/PhoneLink";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: `${post.title} | Forest Heights Veterinary Clinic`,
      description: post.description,
      url: `/blog/${slug}/`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const dateStr = new Date(post.date + "T12:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Find up to 2 related posts: prefer same category, fall back to most recent
  const sameCategory = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const others = posts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
  const relatedPosts = [...sameCategory, ...others].slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image
      ? `https://www.forestheightsvet.com${post.image}`
      : "https://www.forestheightsvet.com/images/storefront.jpg",
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: post.authorSlug
        ? `https://www.forestheightsvet.com/staff/#${post.authorSlug}`
        : "https://www.forestheightsvet.com/staff/",
    },
    publisher: {
      "@type": "VeterinaryCare",
      name: "Forest Heights Veterinary Clinic",
      logo: {
        "@type": "ImageObject",
        url: "https://www.forestheightsvet.com/images/fhv-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.forestheightsvet.com/blog/${slug}/`,
    },
  };

  // Convert markdown-ish content to simple HTML
  const contentHtml = post.content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="font-heading text-2xl font-bold text-gray-900 mt-10 mb-4">${block.slice(3)}</h2>`;
      }
      if (block.startsWith("- **")) {
        const items = block
          .split("\n")
          .map((line) => `<li class="ml-4">${line.replace(/^- /, "")}</li>`)
          .join("");
        return `<ul class="list-disc pl-4 space-y-2 text-gray-600">${items}</ul>`;
      }
      return `<p class="text-gray-600 leading-relaxed">${block}</p>`;
    })
    .join("");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: post.title, href: `/blog/${slug}/` },
        ]}
      />
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/blog/"
              className="text-forest-light hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            >
              &larr; Back to Blog
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4 text-white/70 text-sm">
              <span>
                By{" "}
                {post.authorSlug ? (
                  <Link
                    href={`/staff/#${post.authorSlug}`}
                    className="text-white hover:text-forest-light transition-colors font-semibold"
                  >
                    {post.author}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">
                    {post.author}
                  </span>
                )}
              </span>
              <span>&middot;</span>
              <time dateTime={post.date}>{dateStr}</time>
              <span>&middot;</span>
              <span>{readingTime} min read</span>
              <span>&middot;</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none space-y-4 [&_strong]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Keep Reading
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => {
                const relatedDate = new Date(
                  related.date + "T12:00:00"
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                return (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}/`}
                    className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-forest hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="text-xs font-semibold tracking-widest uppercase text-forest mb-3">
                      {related.category}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-forest-dark transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {related.description}
                    </p>
                    <div className="text-sm text-gray-500">{relatedDate}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Questions? We&rsquo;re Here to Help.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our veterinary team is happy to answer any questions about your
            pet&rsquo;s health. Call us or stop by the clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink
              location="blog_post_cta"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-darkest transition-colors"
            >
              (503) 291-1757
            </PhoneLink>
            <Link
              href="/blog/"
              className="inline-flex items-center justify-center bg-white text-forest-dark px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../posts";

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
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="text-forest-light hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            >
              &larr; Back to Blog
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 mt-4 text-white/70 text-sm">
              <time dateTime={post.date}>{dateStr}</time>
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
            <a
              href="tel:503-291-1757"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white px-8 py-4 rounded font-semibold text-lg hover:bg-forest-darkest transition-colors"
            >
              (503) 291-1757
            </a>
            <Link
              href="/blog"
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

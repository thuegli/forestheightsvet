import type { Metadata } from "next";
import Link from "next/link";
import posts from "./posts";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pet health tips, seasonal care advice, and veterinary insights from the team at Forest Heights Veterinary Clinic in NW Portland, OR.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog | Forest Heights Veterinary Clinic",
    description:
      "Pet health tips, seasonal care advice, and veterinary insights from our NW Portland veterinary team.",
    url: "/blog/",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
        ]}
      />
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Pet Health Tips &amp; Advice
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Blog</h1>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post) => {
              const dateStr = new Date(
                post.date + "T12:00:00"
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="font-heading text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-forest transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <time
                      dateTime={post.date}
                      className="text-xs text-gray-400"
                    >
                      {dateStr}
                    </time>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

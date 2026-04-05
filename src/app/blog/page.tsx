import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pet health tips, news, and updates from Forest Heights Veterinary Clinic in NW Portland. Expert advice on keeping your dogs and cats healthy.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog | Forest Heights Veterinary Clinic",
    description:
      "Pet health tips, news, and updates from Forest Heights Veterinary Clinic in NW Portland.",
    url: "/blog/",
  },
};

const posts = [
  {
    slug: "coronavirus-action-plan",
    title: "Forest Heights Vet Clinic Coronavirus Action Plan",
    date: "March 23, 2020",
    excerpt:
      "An update on how Forest Heights Veterinary Clinic is responding to the COVID-19 pandemic and what changes we've made to keep our staff, clients, and patients safe.",
  },
  {
    slug: "pet-first-aid-awareness-month",
    title: "April Is Pet First Aid Awareness Month",
    date: "April 18, 2018",
    excerpt:
      "Learn essential pet first aid tips that every pet owner should know. Being prepared can make the difference in an emergency situation for your dog or cat.",
  },
  {
    slug: "spring-parasites-and-pests",
    title: "Spring Has Sprung... and So Have Some Parasites and Pests",
    date: "March 15, 2018",
    excerpt:
      "As the weather warms up, so do the risks from fleas, ticks, and other parasites. Learn how to protect your pet this spring season.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-forest-light font-semibold tracking-widest uppercase text-sm mb-3">
            Pet Health & News
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Blog</h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <time className="text-sm text-forest font-semibold">
                  {post.date}
                </time>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <span className="inline-block mt-4 text-forest font-semibold text-sm">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

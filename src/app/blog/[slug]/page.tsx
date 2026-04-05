import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

const posts: Record<string, BlogPost> = {
  "coronavirus-action-plan": {
    title: "Forest Heights Vet Clinic Coronavirus Action Plan",
    date: "March 23, 2020",
    content: `
      <p>As we all navigate this unprecedented time, the health and safety of our clients, staff, and patients remains our top priority at Forest Heights Veterinary Clinic.</p>

      <h2>What We're Doing</h2>
      <p>We have implemented enhanced cleaning and disinfection protocols throughout our clinic. Our team is following all CDC and Oregon Health Authority guidelines to minimize the risk of transmission.</p>

      <h2>Changes to Our Operations</h2>
      <p>To protect everyone involved, we have made several temporary changes to how we operate:</p>
      <ul>
        <li>We are offering curbside drop-off and pick-up for appointments</li>
        <li>Consultations are available by phone when appropriate</li>
        <li>We ask that clients who are feeling unwell reschedule non-urgent appointments</li>
        <li>Payment is accepted by phone to minimize contact</li>
      </ul>

      <h2>Staying Connected</h2>
      <p>We are still here for your pets. If your animal has a medical emergency or needs essential care, please don't hesitate to call us at (503) 291-1757. We will work with you to ensure your pet receives the care they need while keeping everyone safe.</p>

      <p>Thank you for your patience and understanding as we adapt to this situation. We look forward to seeing you and your furry family members again soon.</p>
    `,
  },
  "pet-first-aid-awareness-month": {
    title: "April Is Pet First Aid Awareness Month",
    date: "April 18, 2018",
    content: `
      <p>April is Pet First Aid Awareness Month, and it's the perfect time to brush up on essential first aid skills for your furry family members. Knowing what to do in an emergency can make a critical difference for your pet.</p>

      <h2>Essential First Aid Tips for Pet Owners</h2>

      <h3>Build a Pet First Aid Kit</h3>
      <p>Every pet owner should have a basic first aid kit on hand. Essential items include:</p>
      <ul>
        <li>Gauze pads and rolls for wrapping wounds</li>
        <li>Non-stick bandages and adhesive tape</li>
        <li>Hydrogen peroxide (to induce vomiting — only under veterinary guidance)</li>
        <li>Digital thermometer</li>
        <li>Tweezers for removing splinters or ticks</li>
        <li>Saline solution for flushing wounds or eyes</li>
        <li>Your veterinarian's phone number and the nearest emergency vet clinic number</li>
      </ul>

      <h3>Know the Signs of an Emergency</h3>
      <p>Seek immediate veterinary care if your pet experiences:</p>
      <ul>
        <li>Difficulty breathing</li>
        <li>Bleeding that won't stop</li>
        <li>Suspected broken bones</li>
        <li>Seizures</li>
        <li>Inability to urinate or defecate</li>
        <li>Ingestion of a toxic substance</li>
        <li>Loss of consciousness</li>
      </ul>

      <h3>What to Do First</h3>
      <p>In any emergency, the most important thing is to stay calm. Restrain your pet gently to prevent further injury, and contact your veterinarian or emergency animal hospital immediately. Do not administer any medications without veterinary guidance.</p>

      <p>If you have questions about pet first aid or would like to discuss emergency preparedness for your pet, please don't hesitate to ask at your next appointment or give us a call at (503) 291-1757.</p>
    `,
  },
  "spring-parasites-and-pests": {
    title: "Spring Has Sprung... and So Have Some Parasites and Pests",
    date: "March 15, 2018",
    content: `
      <p>Spring is here, and while we all enjoy the warmer weather and longer days, it's important to remember that this season also brings increased risks from parasites and pests that can affect your pets.</p>

      <h2>Fleas</h2>
      <p>Fleas are one of the most common parasites affecting dogs and cats in the Portland area. These tiny insects thrive in warm, humid conditions and can quickly become a major problem. A single flea can lay up to 50 eggs per day, and an infestation can develop rapidly in your home.</p>
      <p>Signs of fleas include excessive scratching, hair loss, and small dark specks (flea dirt) in your pet's fur. Some pets are allergic to flea saliva and can develop severe skin irritation from even a single bite.</p>

      <h2>Ticks</h2>
      <p>Ticks are particularly active in spring and can transmit serious diseases including Lyme disease, anaplasmosis, and ehrlichiosis. If you enjoy hiking or spending time outdoors with your pet in the Portland area, tick prevention is essential.</p>
      <p>After outdoor activities, always check your pet thoroughly for ticks, paying special attention to the ears, head, neck, and between the toes.</p>

      <h2>Intestinal Parasites</h2>
      <p>Spring rains and warmer temperatures create ideal conditions for intestinal parasites like roundworms, hookworms, and giardia. These parasites can be picked up from contaminated soil, water, or contact with infected animals.</p>

      <h2>Prevention Is Key</h2>
      <p>The best approach to parasite control is prevention. We recommend year-round parasite prevention for all dogs and cats. We carry a variety of effective preventive medications including both oral and topical options.</p>
      <p>Regular fecal testing is also important to detect intestinal parasites early, before they cause significant health problems.</p>

      <p>If you'd like to discuss the best parasite prevention plan for your pet, give us a call at (503) 291-1757 or ask at your pet's next wellness exam.</p>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: `${post.title} — Forest Heights Veterinary Clinic blog.`,
    alternates: { canonical: `/blog/${params.slug}/` },
    openGraph: {
      title: post.title,
      description: `${post.title} — Forest Heights Veterinary Clinic blog.`,
      url: `/blog/${params.slug}/`,
      type: "article",
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Link
            href="/blog"
            className="text-forest-light hover:text-white transition-colors text-sm font-semibold mb-6 inline-flex items-center gap-1"
          >
            &larr; Back to Blog
          </Link>
          <time className="block text-forest-light text-sm mt-4">
            {post.date}
          </time>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-a:text-forest prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? We&apos;re always happy to help.
          </p>
          <a
            href="tel:503-291-1757"
            className="inline-flex items-center justify-center gap-2 bg-forest text-white px-6 py-3 rounded font-semibold hover:bg-forest-dark transition-colors"
          >
            Call (503) 291-1757
          </a>
        </div>
      </section>
    </>
  );
}

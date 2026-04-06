interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  background?: "white" | "gray";
}

export default function FAQSection({
  items,
  title = "Frequently Asked Questions",
  background = "white",
}: FAQSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const bgClass = background === "gray" ? "bg-gray-50" : "bg-white";
  const cardBgClass = background === "gray" ? "bg-white" : "bg-gray-50";

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className={`${cardBgClass} rounded-lg p-6 border border-gray-100 group`}
            >
              <summary className="font-heading font-semibold text-gray-900 cursor-pointer list-none flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <svg
                  className="w-5 h-5 text-forest flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

import testimonialsData from "../../content/testimonials.json";

interface Testimonial {
  quote: string;
  name: string;
  source: string;
  date?: string;
  url?: string;
}

const items = (testimonialsData.items ?? []) as Testimonial[];

export default function Testimonials({
  title = "What Our Clients Say",
  limit = 3,
}: {
  title?: string;
  limit?: number;
}) {
  // Renders nothing until real reviews are added. See content/testimonials.json.
  if (items.length === 0) return null;

  const shown = items.slice(0, limit);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          {title}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {shown.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col"
            >
              <blockquote className="text-gray-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-gray-100 text-sm">
                <span className="font-semibold text-gray-900">{t.name}</span>
                <span className="block text-gray-500 mt-0.5">
                  {t.url ? (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener nofollow"
                      className="hover:underline"
                    >
                      via {t.source}
                    </a>
                  ) : (
                    <>via {t.source}</>
                  )}
                  {t.date ? ` · ${t.date}` : ""}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

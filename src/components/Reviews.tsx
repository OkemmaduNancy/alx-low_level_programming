import { reviews } from "@/data/Reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Student Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
            What our students say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <figure
              key={index}
              className={`relative rounded-2xl bg-white p-8 shadow-sm ${
                review.isPlaceholder
                  ? "border-2 border-dashed border-gold-dark/60"
                  : "border border-ink/10"
              }`}
            >
              {review.isPlaceholder && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                  Placeholder
                </span>
              )}

              <div className="text-3xl leading-none text-gold-dark" aria-hidden>
                “
              </div>
              <blockquote className="mt-2 text-sm leading-relaxed text-ink/80">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-semibold text-ink">{review.name}</p>
                <p className="text-sm text-ink/60">{review.skill}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

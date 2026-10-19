"use client";

import { useEffect, useState } from "react";
import { reviews } from "@/data/Reviews";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const showReview = (index: number) => {
    setActiveIndex((index + reviews.length) % reviews.length);
  };

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

        <div
          className="mx-auto mt-14 max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Student reviews"
        >
          <figure
            key={activeIndex}
            className={`review-slide relative rounded-2xl bg-white p-8 shadow-sm ${
              activeReview.isPlaceholder
                ? "border-2 border-dashed border-gold-dark/60"
                : "border border-ink/10"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Review ${activeIndex + 1} of ${reviews.length}`}
          >
            {activeReview.isPlaceholder && (
              <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                Placeholder
              </span>
            )}

            <div className="text-3xl leading-none text-gold-dark" aria-hidden>
              “
            </div>
            <blockquote className="mt-2 text-sm leading-relaxed text-ink/80">
              {activeReview.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-ink/10 pt-4">
              <p className="font-semibold text-ink">{activeReview.name}</p>
              <p className="text-sm text-ink/60">{activeReview.skill}</p>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => showReview(activeIndex - 1)}
              className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink/5"
              aria-label="Previous review"
            >
              Previous
            </button>
            <div
              className="flex items-center gap-2"
              aria-label="Choose a review"
            >
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => showReview(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-gold-dark" : "bg-ink/20"
                  }`}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => showReview(activeIndex + 1)}
              className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink/5"
              aria-label="Next review"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { contactItems } from "@/data/contacts";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl">
            Have a question? Get in touch
          </h2>
          <p className="mt-5 text-cream/70">
            Reach out to us and we will be happy to help.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => {
            const content = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-2xl">
                  {item.icon}
                </div>
                <p className="mt-5 text-sm text-cream/60">{item.label}</p>
                <p
                  className={`mt-1 font-semibold ${
                    item.isPlaceholder ? "text-cream/50" : "text-cream"
                  }`}
                >
                  {item.value}
                </p>
              </>
            );

            if (item.isPlaceholder || !item.href) {
              return (
                <div
                  key={item.label}
                  className="relative rounded-2xl border-2 border-dashed border-gold/40 p-7"
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                    Placeholder
                  </span>
                  {content}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-gold/20 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-gold/60"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

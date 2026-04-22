const partners = ["OpenAI", "Anthropic", "n8n", "Make", "Zapier", "GoHighLevel", "Airtable"];

export function TrustBar() {
  return (
    <section className="border-y border-gold/10 bg-surface/40 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-[10px] tracking-[0.4em] text-silver/50 uppercase text-center mb-6">
          Built with the best
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {partners.map((p) => (
            <span
              key={p}
              className="font-serif text-xl text-silver/55 hover:text-silver transition-colors tracking-wide"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
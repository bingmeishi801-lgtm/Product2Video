const metrics = [
  {
    value: "3–8",
    label: "Product images",
    detail: "The MVP flow accepts a small set of product images for a single concept.",
  },
  {
    value: "1",
    label: "Selling point",
    detail: "Users only need one short line about the main value proposition.",
  },
  {
    value: "3",
    label: "Video styles",
    detail: "Three starter templates are enough to validate demand without bloating scope.",
  },
  {
    value: "<3 min",
    label: "Happy path",
    detail: "The product goal is a complete generation flow in under three minutes.",
  },
];

export function MetricsSection() {
  return (
    <section className="section">
      <h2 className="section-title">MVP success targets</h2>
      <p className="section-copy">
        This first cut is for validation, not feature depth. The main question is whether sellers want to turn images into usable ads this way.
      </p>
      <div className="metric-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card card">
            <strong>{metric.value}</strong>
            <h3>{metric.label}</h3>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

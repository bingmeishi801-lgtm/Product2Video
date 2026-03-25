const features = [
  {
    title: "No editing skills needed",
    description: "Upload product images, write one selling point, and let the app guide the rest.",
  },
  {
    title: "Built for ecommerce ads",
    description: "The mock workflow is already shaped around campaign-ready product promo videos.",
  },
  {
    title: "Ready for API integration",
    description: "The UI and backend routes are in place so you can plug in a real video model later.",
  },
];

export function FeatureSection() {
  return (
    <section className="section">
      <h2 className="section-title">Why this MVP works</h2>
      <p className="section-copy">
        It keeps the first version focused on a single promise: turn product images into a short ad video with the least amount of friction.
      </p>
      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { FeatureSection } from "@/components/feature-section";
import { MetricsSection } from "@/components/metrics-section";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="pill">MVP • Next.js full stack • Cloudflare-ready</div>
          <h1>Turn product images into short ad videos in minutes</h1>
          <p>
            This demo product is designed for ecommerce sellers who want a simple flow: upload product images, add one selling point, choose a template, and generate a video ad.
          </p>
          <div className="button-row">
            <Link href="/generate" className="button">
              Start free
            </Link>
            <a href="#how-it-works" className="button-secondary">
              See how it works
            </a>
          </div>
        </div>

        <div className="preview-card">
          <div className="pill">Live MVP preview</div>
          <h3 style={{ marginBottom: 8 }}>What users do</h3>
          <p className="muted">Upload 3–8 images, write one key benefit, choose a style, and get a short campaign-ready video.</p>
          <div className="preview-grid">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="preview-meta">
            <span className="pill">3 templates</span>
            <span className="pill">Mock API flow</span>
            <span className="pill">Cloudflare deployment target</span>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <h2 className="section-title">How the MVP works</h2>
        <p className="section-copy">This version is intentionally narrow: it validates the core user promise before you connect a real video model.</p>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>1. Add product images</h3>
            <p>Choose three to eight product shots to represent the item and campaign angle.</p>
          </article>
          <article className="feature-card">
            <h3>2. Write one selling point</h3>
            <p>Describe the main benefit in one short line, so the output stays focused and conversion-friendly.</p>
          </article>
          <article className="feature-card">
            <h3>3. Generate a result</h3>
            <p>The mock backend creates a task, simulates processing, and returns a demo video result page.</p>
          </article>
        </div>
      </section>

      <FeatureSection />
      <MetricsSection />
    </>
  );
}

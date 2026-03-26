import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container grid" style={{ gap: 18 }}>
      <section className="hero card">
        <p className="meta">Product2Video · MVP</p>
        <h1>Turn product images into short ad videos in minutes</h1>
        <p>
          Upload your product photos, add one selling point, and generate a ready-to-use video ad
          for ecommerce campaigns.
        </p>
        <div className="row" style={{ marginTop: 14 }}>
          <Link href="/generate" className="btn btn-primary">Start Free</Link>
          <a href="#demo" className="btn btn-secondary">See Demo</a>
        </div>
      </section>

      <section className="card">
        <h3>Why Product2Video</h3>
        <ul>
          <li>No editing skills needed</li>
          <li>Built for ecommerce ads</li>
          <li>Create videos faster and cheaper</li>
        </ul>
      </section>

      <section id="demo" className="card">
        <h3>How it works</h3>
        <ol>
          <li>Upload 3-8 product images</li>
          <li>Add one selling point</li>
          <li>Choose a template and click Generate Video</li>
        </ol>
      </section>
    </main>
  );
}

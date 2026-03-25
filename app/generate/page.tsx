import { GenerateForm } from "@/components/generate-form";

export default function GeneratePage() {
  return (
    <section className="section">
      <h1 className="section-title">Generate a product video</h1>
      <p className="section-copy">
        This page already includes the full happy path: upload images, set a selling point, pick a style, create a task, and view the result page.
      </p>
      <GenerateForm />
    </section>
  );
}

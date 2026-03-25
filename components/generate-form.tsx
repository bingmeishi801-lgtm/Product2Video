"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { templates } from "@/lib/constants";
import type { GenerateResponseBody } from "@/lib/types";

const maxImages = 8;
const minImages = 3;

type PreviewFile = {
  name: string;
  url: string;
};

export function GenerateForm() {
  const router = useRouter();
  const [sellingPoint, setSellingPoint] = useState("");
  const [templateId, setTemplateId] = useState<(typeof templates)[number]["id"]>(templates[0].id);
  const [previews, setPreviews] = useState<PreviewFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => previews.length >= minImages && previews.length <= maxImages && !isSubmitting, [previews.length, isSubmitting]);

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;

    const nextFiles = Array.from(fileList).slice(0, maxImages).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPreviews(nextFiles);
    setError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (previews.length < minImages) {
      setError(`Please upload at least ${minImages} product images.`);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sellingPoint: sellingPoint.trim() || "A campaign-ready product benefit",
          templateId,
          imageNames: previews.map((item) => item.name),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to create mock generation task.");
      }

      const data = (await response.json()) as GenerateResponseBody;
      router.push(`/result/${data.taskId}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="form-shell" onSubmit={handleSubmit}>
      <section className="form-main">
        <div className="field-group">
          <label className="field-label" htmlFor="images">
            Upload product images
          </label>
          <div className="upload-box">
            <input
              id="images"
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              multiple
              onChange={(event) => handleFiles(event.target.files)}
            />
            <p className="upload-hint">Use {minImages} to {maxImages} images. This MVP keeps the upload client-side and sends only mock metadata to the backend.</p>
          </div>
        </div>

        {previews.length > 0 ? (
          <div className="image-preview-grid">
            {previews.map((preview) => (
              <div key={preview.url} className="image-preview-card">
                <img src={preview.url} alt={preview.name} />
                <div className="meta">{preview.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">No images selected yet. Add product shots to preview the campaign layout.</div>
        )}

        <div className="field-group">
          <label className="field-label" htmlFor="selling-point">
            Selling point
          </label>
          <textarea
            id="selling-point"
            className="textarea"
            placeholder="Describe your product’s key selling point"
            value={sellingPoint}
            onChange={(event) => setSellingPoint(event.target.value)}
          />
        </div>
      </section>

      <aside className="form-side">
        <div className="field-group">
          <span className="field-label">Choose a video style</span>
          <div className="template-grid">
            {templates.map((template) => (
              <button
                key={template.id}
                type="button"
                className={`template-card ${template.id === templateId ? "active" : ""}`}
                onClick={() => setTemplateId(template.id)}
              >
                <h4>{template.name}</h4>
                <p>{template.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="inline-note">
          This version uses mock backend logic only. It creates a task, waits a few seconds, then returns a demo video as the final output.
        </div>

        {error ? <div className="inline-note">{error}</div> : null}

        <button className="button" type="submit" disabled={!canSubmit}>
          {isSubmitting ? "Creating mock task..." : "Generate Video"}
        </button>
        <p className="muted">Tip: keep the selling point short and concrete. Example: “Lightweight and perfect for daily commuting.”</p>
      </aside>
    </form>
  );
}

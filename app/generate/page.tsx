"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TEMPLATES = ["Clean Product Ad", "Bold Promo", "Lifestyle Showcase"];

type Preview = { key: string; url: string };

export default function GeneratePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [sellingPoint, setSellingPoint] = useState("");
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const next = files.map((f) => ({ key: `${f.name}-${f.size}-${f.lastModified}`, url: URL.createObjectURL(f) }));
    setPreviews(next);
    return () => {
      next.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [files]);

  const onPickFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const list = Array.from(incoming).filter((f) => ["image/jpeg", "image/jpg", "image/png"].includes(f.type));
    const merged = [...files, ...list].slice(0, 8);
    setFiles(merged);
  };

  const removeAt = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const canGenerate = files.length >= 3 && !loading;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("sellingPoint", sellingPoint);
      fd.append("template", template);
      files.forEach((f) => fd.append("images", f));

      const res = await fetch("/api/generate", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Generate failed");
      const data = await res.json();
      router.push(`/result/${data.taskId}`);
    } catch {
      alert("Generate failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container grid">
      <div className="card grid">
        <h2>Generate Product Video</h2>
        <p className="meta">Step 1: Upload 3-8 product images (jpg/jpeg/png)</p>
        <input type="file" accept="image/jpeg,image/jpg,image/png" multiple onChange={(e) => onPickFiles(e.target.files)} />

        {files.length > 0 && (
          <div className="preview-grid">
            {previews.map((p, idx) => (
              <div className="preview-item" key={p.key}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={`preview-${idx}`} />
                <button type="button" onClick={() => removeAt(idx)}>Delete</button>
              </div>
            ))}
          </div>
        )}

        <p className="meta">Step 2: Add one selling point</p>
        <textarea
          className="textarea"
          rows={3}
          placeholder="Describe your product’s key selling point"
          value={sellingPoint}
          onChange={(e) => setSellingPoint(e.target.value)}
        />

        <p className="meta">Step 3: Choose a template</p>
        <div className="templates">
          {TEMPLATES.map((t) => (
            <button
              type="button"
              key={t}
              className={`template ${template === t ? "active" : ""}`}
              onClick={() => setTemplate(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <button className="btn btn-primary" disabled={!canGenerate} onClick={handleGenerate}>
          {loading ? "Generating..." : "Generate Video"}
        </button>
        {!canGenerate && <p className="meta">Please upload at least 3 images to continue.</p>}
      </div>
    </main>
  );
}

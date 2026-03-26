"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Task = {
  id: string;
  status: "queued" | "processing" | "done";
  sellingPoint: string;
  template: string;
  resultVideoUrl: string;
};

export default function ResultPage() {
  const params = useParams<{ taskId: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const res = await fetch(`/api/task/${params.taskId}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      const data = await res.json();
      setTask(data.task);
      setLoading(false);
    };
    run();
  }, [params.taskId]);

  if (loading) return <main className="container"><div className="card">Loading...</div></main>;
  if (!task) return <main className="container"><div className="card">Task not found</div></main>;

  return (
    <main className="container grid">
      <div className="card grid">
        <h2>Your video is ready</h2>
        <p className="meta">Download your ad and use it in your next campaign.</p>

        <video controls width="100%" src={task.resultVideoUrl} />

        <div>
          <p><strong>Template:</strong> {task.template}</p>
          <p><strong>Selling Point:</strong> {task.sellingPoint || "(empty)"}</p>
        </div>

        <div className="row">
          <a className="btn btn-primary" href={task.resultVideoUrl} download="product2video-demo.mp4">Download</a>
          <Link href="/generate" className="btn btn-secondary">Try Another One</Link>
        </div>
      </div>
    </main>
  );
}

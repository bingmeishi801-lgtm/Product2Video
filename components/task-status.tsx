"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { TaskResponseBody } from "@/lib/types";

export function TaskStatus({ taskId }: { taskId: string }) {
  const [task, setTask] = useState<TaskResponseBody | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    async function loadTask() {
      try {
        const response = await fetch(`/api/task/${taskId}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Task not found.");
        }

        const data = (await response.json()) as TaskResponseBody;
        if (cancelled) return;
        setTask(data);
        setError(null);

        if (data.status === "processing") {
          timeoutId = setTimeout(loadTask, 1500);
        }
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : "Unable to load task.";
        setError(message);
      }
    }

    loadTask();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [taskId]);

  if (error) {
    return (
      <div className="status-card">
        <h2>Task not available</h2>
        <p className="muted">{error}</p>
        <div className="button-row" style={{ marginTop: 16 }}>
          <Link href="/generate" className="button">
            Create another task
          </Link>
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="status-card">
        <div className="status-badge">
          <span className="status-dot" /> Preparing result
        </div>
        <h2>Loading task</h2>
        <p className="muted">Fetching the latest generation status…</p>
      </div>
    );
  }

  const isDone = task.status === "completed" && task.result;

  return (
    <div className="result-shell">
      <section className="result-main">
        <div className="status-card">
          <div className="status-badge">
            <span className={`status-dot ${isDone ? "done" : ""}`} />
            {isDone ? "Completed" : "Processing"}
          </div>
          <h1 style={{ marginBottom: 10 }}>{isDone ? task.result.headline : "Your video is processing"}</h1>
          <p className="muted">
            {isDone
              ? task.result.summary
              : "This is a mock generation task. Stay on this page and it will update automatically in a few seconds."}
          </p>
        </div>

        {isDone ? (
          <>
            <div className="video-frame">
              <video controls preload="metadata" src={task.result.videoUrl} />
            </div>
            <div className="summary-grid">
              <div className="summary-item">
                <h4>Selling point</h4>
                <p>{task.input.sellingPoint}</p>
              </div>
              <div className="summary-item">
                <h4>Template</h4>
                <p>{task.input.templateId}</p>
              </div>
              <div className="summary-item">
                <h4>Images used</h4>
                <p>{task.input.imageNames.join(", ")}</p>
              </div>
              <div className="summary-item">
                <h4>CTA</h4>
                <p>{task.result.cta}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-state">
            The mock backend marks tasks as completed after a short delay. This simulates the polling flow you will later reuse with the real model API.
          </div>
        )}
      </section>

      <aside className="result-side">
        <div className="status-card">
          <h3>Task ID</h3>
          <p className="muted">{task.id}</p>
        </div>

        <div className="status-card">
          <h3>Next actions</h3>
          <p className="muted">Use this page to validate the result experience before wiring in the actual video generation provider.</p>
          <div className="button-row" style={{ marginTop: 16 }}>
            {isDone ? (
              <a className="button" href={task.result.videoUrl} download>
                Download video
              </a>
            ) : null}
            <Link className="button-secondary" href="/generate">
              Try another one
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

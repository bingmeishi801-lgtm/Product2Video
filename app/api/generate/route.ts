import { NextResponse } from "next/server";
import { mockTasks } from "../_store";

export async function POST(req: Request) {
  const form = await req.formData();
  const sellingPoint = String(form.get("sellingPoint") || "");
  const template = String(form.get("template") || "Clean Product Ad");
  const images = form.getAll("images");

  if (images.length < 3 || images.length > 8) {
    return NextResponse.json({ error: "Please upload 3 to 8 images" }, { status: 400 });
  }

  const taskId = crypto.randomUUID();
  mockTasks.set(taskId, {
    id: taskId,
    status: "processing",
    sellingPoint,
    template,
    imageCount: images.length,
    resultVideoUrl: "/demo-video.mp4",
  });

  await new Promise((r) => setTimeout(r, 2200));

  const task = mockTasks.get(taskId);
  if (task) {
    task.status = "done";
    mockTasks.set(taskId, task);
  }

  return NextResponse.json({ taskId });
}

import { NextResponse } from "next/server";
import { getMockTask } from "@/lib/mock-tasks";

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const task = getMockTask(id);

  if (!task) {
    return NextResponse.json({ error: "Task not found." }, { status: 404 });
  }

  return NextResponse.json(task, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

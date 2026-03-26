import { NextResponse } from "next/server";
import { mockTasks } from "../../_store";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const task = mockTasks.get(params.id);
  if (!task) return NextResponse.json({ error: "Task not found" }, { status: 404 });
  return NextResponse.json({ task });
}

import { NextResponse } from "next/server";
import { createMockTask } from "@/lib/mock-tasks";
import type { GenerateRequestBody } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<GenerateRequestBody>;

  if (!body.templateId || !body.imageNames || body.imageNames.length < 3) {
    return NextResponse.json({ error: "Please provide a template and at least 3 image names." }, { status: 400 });
  }

  const task = createMockTask({
    templateId: body.templateId,
    imageNames: body.imageNames,
    sellingPoint: body.sellingPoint?.trim() || "A campaign-ready product benefit",
  });

  return NextResponse.json({
    taskId: task.id,
    status: task.status,
  });
}

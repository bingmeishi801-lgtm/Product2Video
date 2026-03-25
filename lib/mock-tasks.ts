export type TemplateId = "clean-product-ad" | "bold-promo" | "lifestyle-showcase";

export type MockTaskInput = {
  sellingPoint: string;
  templateId: TemplateId;
  imageNames: string[];
};

export type MockTask = {
  id: string;
  status: "processing" | "completed";
  createdAt: number;
  input: MockTaskInput;
  result?: {
    videoUrl: string;
    durationSeconds: number;
    headline: string;
    summary: string;
    cta: string;
  };
};

const tasks = new Map<string, MockTask>();
const PROCESSING_DELAY_MS = 4000;

function randomId(): string {
  return Math.random().toString(36).slice(2, 10);
}

function buildSummary(input: MockTaskInput): string {
  const templateName = {
    "clean-product-ad": "clean product ad",
    "bold-promo": "bold promo",
    "lifestyle-showcase": "lifestyle showcase",
  }[input.templateId];

  return `A ${templateName} demo video generated from ${input.imageNames.length} product image(s) around: ${input.sellingPoint}`;
}

function finalizeTask(task: MockTask): MockTask {
  if (task.status === "completed") return task;

  const ready = Date.now() - task.createdAt >= PROCESSING_DELAY_MS;
  if (!ready) return task;

  const completedTask: MockTask = {
    ...task,
    status: "completed",
    result: {
      videoUrl: "/demo-video.mp4",
      durationSeconds: 8,
      headline: "Your demo video is ready",
      summary: buildSummary(task.input),
      cta: "Download and use it in your next campaign.",
    },
  };

  tasks.set(task.id, completedTask);
  return completedTask;
}

export function createMockTask(input: MockTaskInput): MockTask {
  const task: MockTask = {
    id: randomId(),
    status: "processing",
    createdAt: Date.now(),
    input,
  };

  tasks.set(task.id, task);
  return task;
}

export function getMockTask(id: string): MockTask | null {
  const task = tasks.get(id);
  if (!task) return null;
  return finalizeTask(task);
}

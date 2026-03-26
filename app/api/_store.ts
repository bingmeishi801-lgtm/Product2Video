export type MockTask = {
  id: string;
  status: "queued" | "processing" | "done";
  sellingPoint: string;
  template: string;
  imageCount: number;
  resultVideoUrl: string;
};

const g = globalThis as unknown as { __mockTasks?: Map<string, MockTask> };
export const mockTasks = g.__mockTasks ?? new Map<string, MockTask>();
if (!g.__mockTasks) g.__mockTasks = mockTasks;

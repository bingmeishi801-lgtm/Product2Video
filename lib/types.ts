import type { TemplateId } from "@/lib/mock-tasks";

export type GenerateRequestBody = {
  sellingPoint: string;
  templateId: TemplateId;
  imageNames: string[];
};

export type GenerateResponseBody = {
  taskId: string;
  status: "processing" | "completed";
};

export type TaskResponseBody = {
  id: string;
  status: "processing" | "completed";
  createdAt: number;
  input: {
    sellingPoint: string;
    templateId: TemplateId;
    imageNames: string[];
  };
  result?: {
    videoUrl: string;
    durationSeconds: number;
    headline: string;
    summary: string;
    cta: string;
  };
};

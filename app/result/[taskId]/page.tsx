import { TaskStatus } from "@/components/task-status";

export default async function ResultPage({ params }: { params: Promise<{ taskId: string }> }) {
  const { taskId } = await params;

  return (
    <section className="section">
      <p className="section-copy">Result page for task {taskId}</p>
      <TaskStatus taskId={taskId} />
    </section>
  );
}

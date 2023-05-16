import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";

export default function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div
      style={{ backgroundColor: "#202020", color: "white" }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1>{task.title}</h1>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const confirm = window.confirm("Are you sure?");
          if (confirm) deleteTask(task.id);
        }}
      >
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  );
}

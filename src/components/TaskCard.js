import { useRouter } from "next/navigation";

export default function TaskCard({ task }) {
  const router = useRouter();

  return (
    <div
      style={{ backgroundColor: "#202020", color: "white" }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1>{task.title}</h1>
      <button>Delete</button>
      <p>{task.description}</p>
    </div>
  );
}

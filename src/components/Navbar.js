"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@/context/TasksContext";

export function Navbar() {
  const router = useRouter();
  const { tasks } = useTasks(); 

  return (
    <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
      <Link href="/">
        <h1 className="font-bold text-3xl text-white">
          Tasks App <span className="text-sm ml-5 text-slate-300">{tasks.length} tasks</span>
        </h1>
      </Link>

      <div>
        <button
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
          onClick={() => router.push("/new")}
        >
          Add Task
        </button>
      </div>
    </header>
  );
}

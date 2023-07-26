'use client'
import { useEffect, useState } from "react";
import { Todo } from "@/lib/drizzle";

const TodoList = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/todo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result.data);
      } catch (error) {
        console.log(error);
        // Handle error state, e.g., set an error message in the state
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-h-[350px] overflow-auto mb-4">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-100 py-2 px-3 flex items-center gap-x-4 rounded-md shadow my-5">
          {/* circle */}
          <div className="h-3 w-3 bg-secondary rounded-full"></div>
          {/* task title */}
          <p className="text-lg font-medium">{item.tasks}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

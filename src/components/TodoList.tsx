
import { Todo } from "@/lib/drizzle";

const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    if (!res.ok) {  
      throw new Error("Failed to fetch data");
    }
    const result = await res.json()
    // console.log(result)
    return result
  } catch (error) {
    console.log(error);
  }
};

const TodoList = async () => {
  const res:{data:Todo[]} = await getData();

  return (
    <div className="max-h-[350px] overflow-auto mb-4 ">
      {res.data.map((item) => {
        return(
        <div key={item.id} className="bg-gray-100 py-2 px-3 flex items-center gap-x-4 rounded-md shadow my-5">
          {/* circle */}
          <div className="h-3 w-3 bg-secondary rounded-full"></div>
          {/* task title */}
          <p className="text-lg font-medium">{item.tasks}</p>
        </div>
        )
      })}
    </div>
  );
};

export default TodoList;

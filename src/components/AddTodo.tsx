'use client'
import Image from 'next/image'
import { useState } from 'react'
import { NewTodo } from "@/lib/drizzle";
import { useRouter } from 'next/navigation';


const AddTodo = () => {
  const [tasks, setTask] = useState<NewTodo | null>(null);
  const { refresh } = useRouter()
  const handleSubmit = async () => {
    try {
      if (tasks) {
        const res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            tasks: tasks.tasks,
          })
        })
        refresh();
        console.log(res.ok);

      }
    } catch (error) { 
      console.log(error)
    }
  }

  return (
    <div>
      <form className='w-full flex gap-x-3 '>
        <input onChange={(e) => setTask({ tasks: e.target.value })} className='rounded-full w-full py-3 px-5 border focus:outline-secondary ' type="text" />
        <button type='button' onClick={handleSubmit} className=' p-4 rounded-full shrink-0 bg-gradient-to-b from-primary to-secondary'><Image src={"/vector.png"} alt='SendButton' width={20} height={20} /></button>
      </form>
    </div>
  )
}

export default AddTodo



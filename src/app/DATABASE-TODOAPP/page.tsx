import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

const DATABASE_TODOAPP = () => {
  return (
    <main className='bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center'>
        <div className='px-3 py-4 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60 backdrop-blur-xl  w-full max-w-md '>
            {/* todolist */}
            {/* @ts-ignore */}
            <TodoList/>
            {/* <AddTodo/> */}
            <AddTodo/>

            {/* {bar} */}
<div className='w-1/2 h-1.5 bg-black/70 rounded mx-auto mt-5'></div>
        </div>
    </main>
  )
}
    
export default DATABASE_TODOAPP

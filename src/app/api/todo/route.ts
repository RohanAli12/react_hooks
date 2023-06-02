import { NextRequest, NextResponse } from "next/server";
// import { db } from "@vercel/postgres";
import { Todo, db, NewTodo, todoTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

//get method
export async function GET(request: NextRequest) {
  try {
    await sql`create table if not exists Todos(id serial,Tasks varchar(255));`;
    const res = await db.select().from(todoTable);
    return NextResponse.json({ data: res });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Something Went Wrong" });
    // return new NextResponse("Something Went Wrong")
  }
}
// //post method
export async function POST(request: NextRequest) {
 
    const req = await request.json();

  try {
    if (req.tasks) {
        const res = await  db.insert(todoTable).values({
          tasks: req.tasks,
        }).returning();
        console.log(res)
        return NextResponse.json({ message: "Task Added Successfully",data:res} )
    } else {
        throw new Error("Tasks Field is Required.");

    }

  } catch (error) {
    return NextResponse.json({message: (error as {message:string}).message});

  }
}
// // //delete method
// export async function DELETE(request: NextRequest) {
//     const req = await request.json();
//   try {
//     if (req.tasks) {
//         const res =  db.delete(todoTable);
//         console.log(res)
//         return NextResponse.json({ message: "Task Deleted Successfully" });
//     } else {
//         throw new Error("Task Field is Required.");
//     }
//   } catch (error) {
//     return NextResponse.json({message: (error as {message:string}).message});
//   }
// }


























// //get method
// export async function GET(request: NextRequest) {
//   const client = await db.connect();

//   try {
//     await client.sql`create table if not exists Todos(id serial,Tasks varchar(255));`;
//     const res = await client.sql`select * from todos`
//     return NextResponse.json({ data:res});
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Something Went Wrong" });
//     // return new NextResponse("Something Went Wrong")
//   }
// }
// //post method
// export async function POST(request: NextRequest) {
//     const client = await db.connect();
//     const req = await request.json();

//   try {
//     if (req.tasks) {
//         client.sql `insert into todos (tasks) values (${req.tasks})`;
//         return NextResponse.json({ message: "Task Added Successfully" });
//     } else {
//         throw new Error("Task Field is Required.");

//     }

//   } catch (error) {
//     return NextResponse.json({message: (error as {message:string}).message});

//   }
// }

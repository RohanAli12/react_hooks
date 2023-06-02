import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
//types
import { InferModel } from "drizzle-orm";

export const todoTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  tasks: varchar("tasks", { length: 255 }).notNull(),
});

export type Todo = InferModel<typeof todoTable>; // for data get
export type NewTodo = InferModel<typeof todoTable, "insert">; //for data insert
// or sirf 2 hi option hota han insert and get delete mein bhi inseet ky throuh kr rh hota ha

export const db = drizzle(sql);
//yeh sql env mein jo jo secrets han woh utha kr drizzle ko dedeiga or drizzle khud ek conection ha jo join krta  ha db ko

// db.insert(todoTable).values({
//     tasks:"Task 4",
//     }).execute()

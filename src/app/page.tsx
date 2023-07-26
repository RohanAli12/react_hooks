import Link from "next/link";
import FAQs from "./FAQ/page";
import TODOAPP from "./todo_app";

export default function Home() {
  return (
   <>
   <FAQs />
   <TODOAPP />
   <br/>
   <Link href={"/DATABASE-TODOAPP"}>CLICK HERE TO VISIT CRUD TODOAPP</Link>
   </>
  )
}

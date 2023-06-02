'use client'
import { FC, useState } from "react";

const FAQs = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleIsOpen = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <div onClick={handleIsOpen} className="px-4 py-4 bg-blue-600 text-white">
        <h1 className="text-xl">Lorem</h1>
      </div>
      
      <div className={`bg-blue-400 text-white overflow-hidden duration-500 ${isOpen?"max-h-24 ":"max-h-0"}`}><p className="px-3 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem alias architecto mollitia optio dicta ea ducimus explicabo vitae accusamus, dignissimos error. Maiores quas exercitationem molestias obcaecati, labore consequuntur fugit? Voluptas laborum repellat libero.</p></div>
    </div>
  );
};
export default FAQs;

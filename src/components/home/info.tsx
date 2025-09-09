"use client";

import Image from "next/image";

import Student from "@/assets/image/student.jpg";

export default function Info() {
   return (
      <div className="flex justify-center mt-20 ">
         <div 
            style={{
               backgroundImage: `url(${Student.src})`,
               backgroundAttachment: "fixed",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
            className="flex flex-row items-center justify-between w-[100vw] py-32 px-[6vw] sm:px-[8.3vw] text-white  "
         >
           <div><p>10</p></div>
           <div><p>10</p></div>
           <div><p>10</p></div>
           <div><p>10</p></div>
         </div>
      </div>
   );
}


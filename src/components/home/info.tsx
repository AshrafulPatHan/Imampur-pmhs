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
            className="flex flex-row items-center justify-between w-[100vw] py-40 px-[6vw] sm:px-[8.3vw] text-white   "
         >
            <div className="flex flex-col items-center ">
               <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[#ffffff1e] backdrop-blur-[2.2px] border border-[#ffffff1c] rounded-full flex-center ">
                  <p>🏫</p>
               </div>
               <p className="text-xs sm:text-sm lg:text-xl font-bold">1937</p>
               <h3 className="text-sm sm:text-md lg:text-xl font-bold">Founded</h3>
            </div>
            <div className="flex flex-col items-center ">
               <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[#ffffff1e] backdrop-blur-[2.2px] border border-[#ffffff1c] rounded-full flex-center ">
                  <p>👨🏽‍🏫</p>
               </div>
               <p className="text-xs sm:text-sm lg:text-xl font-bold">1937</p>
               <h3 className="text-sm sm:text-md lg:text-xl font-bold">Teacher</h3>
            </div>
            <div className="flex flex-col items-center ">
               <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[#ffffff1e] backdrop-blur-[2.2px] border border-[#ffffff1c] rounded-full flex-center ">
                  <p>👨🏽‍🎓</p>
               </div>
               <p className="text-xs sm:text-sm lg:text-xl font-bold">661</p>
               <h3 className="text-sm sm:text-md lg:text-xl font-bold">Student</h3>
            </div>
            <div className="flex flex-col items-center ">
               <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[#ffffff1e] backdrop-blur-[2.2px] border border-[#ffffff1c] rounded-full flex-center ">
                  <p>⭐</p>
               </div>
               <p className="text-xs sm:text-sm lg:text-xl font-bold">5</p>
               <h3 className="text-sm sm:text-md lg:text-xl font-bold">Rating</h3>
            </div>
         </div>
      </div>
   );
}


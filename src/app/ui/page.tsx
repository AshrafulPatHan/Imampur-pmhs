import Image from "next/image";
import arrow from "@/assets/icon/arrow.svg";
import image from "@/assets/image/student.webp";


export default function UI() {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-amber-500 h-5 w-[95%] 2xl:w-[65%] "></div>
            <h3 className=" mb-8 font-bold text-2xl">whide</h3>

            <h3 className="mt-20 mb-8 font-bold text-2xl">Color</h3>
            <div className="flex ">
                <div className="bg-amber-500 w-40 h-40 text-white text-center flex flex-col justify-center">
                    <p>bg-amber-500</p>
                </div>
                <div className="bg-blue-600 w-40 h-40  text-white text-center flex flex-col justify-center">
                    <p>bg-blue-600</p>
                </div>
            </div>

            <h3 className="mt-20 mb-8 font-bold text-2xl">Heading</h3>
            <div className="flex gap-20 ">
                <div className="flex flex-col gap-6">
                    <h2 className="text-6xl">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                    <h2 className="text-5xl">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                    <h2 className="text-4xl">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                    <h2 className="text-3xl">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়*</h2>
                    <h2 className="text-2xl">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-6xl font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                    <h2 className="text-5xl font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                    <h2 className="text-4xl font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                    <h2 className="text-3xl font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                    <h2 className="text-2xl font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                </div>
            </div>
            <h3 className="mt-20 mb-8 font-bold text-2xl">pragrafe text</h3>
            <div className="flex gap-20 ">
                <div className="flex flex-col gap-6">
                    <p className="text-xl">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-lg">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-base">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-sm">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-xs">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                </div>
                <div className="flex flex-col gap-6 ">
                    <p className="text-xl font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-lg font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-base font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-sm font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                    <p className="text-xs font-bold">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</p>
                </div>
            </div>

            <div className="mt-20 flex gap-6">
                <div className="flex flex-col gap-5">
                    <button className="bg-amber-500 px-4 py-2 text-white font-bold rounded-lg">click the button</button>
                    <button className="bg-amber-500 px-4 py-2 text-white font-bold rounded-lg flex items-center">
                        click the button
                        <Image src={arrow} alt="arrow" className="h-6 w-10  " />
                    </button>
                    <button className="bg-gradient-to-br from-amber-500 to-blue-500 px-4 py-2 text-white font-bold rounded-lg">click the button</button>
                    <button className="bg-gradient-to-tr from-amber-500 to-blue-500 px-4 py-2 text-white font-bold rounded-lg">click the button</button>
                    <button className="bg-gradient-to-r from-amber-500 to-blue-500 px-4 py-2 text-white font-bold rounded-lg">click the button</button>
                    <button className="bg-gradient-to-l from-amber-500 to-blue-500 px-4 py-2 text-white font-bold rounded-lg">click the button</button>
                    <button className="bg-gradient-to-tl from-amber-500 to-blue-500 px-4 py-2 text-white font-bold rounded-lg">click the button</button>
                </div>
                <div className="flex flex-col gap-5">
                    <button className="border-2 border-amber-500 px-4 font-bold py-2 rounded-lg">click the button</button>
                    <button className="border-2 border-amber-500 px-4 py-2 font-bold rounded-lg flex items-center">
                        click the button
                        <Image src={arrow} alt="arrow" className="h-6 w-10  " />
                    </button>
                    <button className="font-bold underline text-xl underline-offset-[8px]  decoration-[2.5px]  decoration-amber-600 ">clike the button</button>
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="relative w-[400px] h-[400px]  rounded-xl ">
                    <div>
                        <Image src={image} alt="photo" className="rounded-xl h-[400px] object-cover" />
                    </div>
                    <div className="absolute bottom-0 p-4">
                        <p className="font-bold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
                        </p>
                    </div>
                </div>
                <div className="relative w-[400px] h-[400px]  rounded-xl shadow-lg shadow-[#0f0f0f50] border border-[#271a1a2a] ">
                    <div>
                        <Image src={image} alt="photo" className="rounded-xl h-[400px] object-cover" />
                    </div>
                    <div className="absolute bottom-0  p-4">
                        <p className="font-bold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
                        </p>
                    </div>
                </div>
                <div className="group relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-black/30 border border-white/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                    {/* Image */}
                    <Image
                        src={image}
                        alt="photo"
                        className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

                    {/* Text Content */}
                    <div className="absolute bottom-0 p-5 text-white">
                        <p className="font-semibold text-lg leading-snug">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
                        </p>
                        <button className="mt-3 px-4 py-2 rounded-lg bg-amber-500 text-sm font-medium shadow-md hover:bg-amber-600 transition-all duration-300">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="group relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                    {/* Image */}
                    <Image
                        src={image}
                        alt="photo"
                        className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

                    {/* Text Content */}
                    <div className="absolute bottom-0 p-5 text-white">
                        <p className="font-semibold text-lg leading-snug">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
                        </p>
                        <button className="mt-3 px-4 py-2 rounded-lg border-2 border-amber-500 text-sm font-medium shadow-md hover:bg-amber-500 transition-all duration-300">
                            Read More
                        </button>
                    </div>
                </div>

            </div>

            <div className="mb-20"></div>

        </div>
    )
}
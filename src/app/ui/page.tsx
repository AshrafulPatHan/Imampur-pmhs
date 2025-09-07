import Image from "next/image";
import arrow from "@/assets/icon/arrow.svg";


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

            <div className="mb-20"></div>

        </div>
    )
}
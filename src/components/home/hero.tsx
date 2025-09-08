import school from "@/assets/image/school.webp"
import Image from "next/image"

export default function Hero() {
    return(
        <div>
            <div className="relative">
                <div className="w-100% bg-sec">
                    <Image src={school} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" className="w-[100vw] h-[49vw] lg:h-[30vw] object-cover  " />
                </div>
                <div className="absolute top-2 left-2">
                    <h1 className="text-header">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h1>
                    <p>ডাকঘর-কালিপুর বাজার, উপজেলা-মতলব উত্তর, জেলা-চাঁদপুর </p>
                </div>
            </div>
        </div>
    )
}
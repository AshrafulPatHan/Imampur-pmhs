import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/nabvar"
import Image from "next/image";
import school from "@/assets/image/school-clear.png";


export default function StudentPage() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="w-full bg-sec">
          <Image
            src={school}
            alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
            className="w-[100vw] h-[49vw] lg:h-[20vw] object-cover"
          />
        </div>
        <div className="absolute top-2 left-2">
          <h2 className="text-header">ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
          <p>ডাকঘর-কালিপুর বাজার, উপজেলা-মতলব উত্তর, জেলা-চাঁদপুর</p>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

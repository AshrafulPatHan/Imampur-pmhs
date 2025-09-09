import Image from "next/image";
import school from "@/assets/image/school-clear.png";
import Navbar from "@/components/navigation/nabvar";
import Footer from "@/components/navigation/footer";
import School_image from "@/assets/image/imner-clear.webp";
import Libary from "@/components/about/libary";
import Sciencelab from "@/components/about/sciencelab";
import Map from "@/components/home/map";


export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="w-[100%]">
          <Image src={school} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" className="w-[100vw] h-[49vw] lg:h-[20vw] object-cover  " />
        </div>
        <div className="absolute top-2 left-2 bg-[#ffffff17] backdrop-blur-[1.4px] p-2 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#ffffff4f] ">
          <div className="bg-gradient-to-t from-amber-400 to-white bg-clip-text text-transparent ">
            <h1 className="text-[8px] sm:text-sm md:text-lg lg:text-2xl">
              ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
            </h1>
          </div>
          <p className="text-white text-[4px] sm:text-xs md:text-sm">কালিপুর বাজার, মতলব উত্তর, চাঁদপুর </p>
        </div>
      </div>
      <div className="max-width mx-auto">
        <div>
          {/* section 1 */}
          <section className="mt-low">
            <div className="flex flex-col lg:flex-row-reverse gap-8">
              {/* Image Section */}
              <div className="w-full lg:w-[65%] xl:w-[600px] rounded-2xl overflow-hidden group">
                <Image
                  src={School_image}
                  alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                  className="object-cover rounded-2xl w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-[55%] space-y-4">
                <h2 className="text-2xl font-bold">
                  ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aut.
                  Quis, libero. Fugiat, quod praesentium beatae itaque officia nemo cupiditate quidem
                  excepturi sapiente nostrum minima numquam perspiciatis facere corrupti inventore
                  assumenda illum doloribus iure ipsam!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Soluta natus ut excepturi aperiam magni modi cum quae, velit deleniti quod ratione
                  ullam sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/* section ----2 */}
            <div className="flex flex-col lg:flex-row gap-8 mt-low">
              {/* Image Section */}
              <div className="w-full lg:w-[65%] xl:w-[600px] rounded-2xl overflow-hidden group">
                <Image
                  src={School_image}
                  alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                  className="object-cover rounded-2xl w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-[55%] space-y-4">
                <h2 className="text-2xl font-bold">
                  ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aut.
                  Quis, libero. Fugiat, quod praesentium beatae itaque officia nemo cupiditate quidem
                  excepturi sapiente nostrum minima numquam perspiciatis facere corrupti inventore
                  assumenda illum doloribus iure ipsam!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Soluta natus ut excepturi aperiam magni modi cum quae, velit deleniti quod ratione
                  ullam sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </section>
          {/* section 2 */}
          <section className="mt-primary flex flex-col items-center text-center">
            <h3 className="text-header">about school</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-7">
              <div className="bg-sec w-72 h-60 rounded-2xl"></div>
              <div className="bg-sec w-72 h-60 rounded-2xl"></div>
              <div className="bg-sec w-72 h-60 rounded-2xl"></div>
            </div>
          </section>
          {/* section 3 */}
          <section className="mt-primary">
            <h3 className="text-header text-center">libary</h3>
            <Libary />
          </section>
          {/* section 4 */}
          <section className="mt-primary">
            <h3 className="text-header text-center">science labe</h3>
            <Sciencelab />
          </section>
        </div>
      </div>
      {/* section 5 */}
      <section className="max-w-screen overflow-hidden">
        <Map />
      </section>
      <Footer />
    </div>
  );
}

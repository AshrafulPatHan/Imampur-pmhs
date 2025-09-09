import Image from "next/image";
import School_image from "@/assets/image/school-2.webp";

export default function Intro() {
    return (
        <div className="max-width flex flex-col items-center mt-primary mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
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
                    <div className="bg-gradient-to-bl from-amber-400 to-blue-600 bg-clip-text text-transparent ">
                        <h1 className="text-header">
                            ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
                        </h1>
                    </div>
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
        </div>
    );
}

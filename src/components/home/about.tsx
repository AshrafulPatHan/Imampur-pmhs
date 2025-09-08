import Image from "next/image";
import School_image from "@/assets/image/imner-clear.webp";


export default function About() {
    return (
        <div className="max-width flex flex-col items-center mt-primary mx-auto">
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

        </div>
    )
}
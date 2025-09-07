import Image from "next/image";
import School_image from "@/assets/image/school-2.webp";


export default function Intro() {
    return(
        <div>
            <div>
                <div>
                    <Image src={School_image} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" />
                </div>
                <div>
                    <div>
                        <h2>ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aut. Quis, libero. Fugiat, quod praesentium beatae itaque officia nemo cupiditate quidem excepturi sapiente nostrum minima numquam perspiciatis facere corrupti inventore assumenda illum doloribus iure ipsam! Soluta natus ut excepturi aperiam magni modi cum quae, velit deleniti quod ratione ullam sed!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, aut. Quis, libero. Fugiat, quod praesentium beatae itaque officia nemo cupiditate quidem excepturi sapiente nostrum minima numquam perspiciatis facere corrupti inventore assumenda illum doloribus iure ipsam! Soluta natus ut excepturi aperiam magni modi cum quae, velit deleniti quod ratione ullam sed!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
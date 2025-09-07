import Image from "next/image";
import School_image from "@/assets/image/school-2.webp";


export default function About() {
    return(
        <div>
            <div>
                <div>
                    <Image src={School_image} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" />
                </div>
                <div>
                    <div>
                        <h2></h2>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
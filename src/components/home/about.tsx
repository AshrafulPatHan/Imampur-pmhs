import Image from "next/image";
import School_image from "@/assets/image/imner-clear.webp";


export default function About() {
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit tempora sit harum minus exercitationem nemo ducimus saepe sed. Vel, ipsa sequi! Omnis dicta blanditiis est atque, libero maiores delectus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit tempora sit harum minus exercitationem nemo ducimus saepe sed. Vel, ipsa sequi! Omnis dicta blanditiis est atque, libero maiores delectus!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
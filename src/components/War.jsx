import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import {SiFacebook, SiKick} from "react-icons/si"

export default function War() {
    return (
        <div className="  px-6 py-4 bg-black">

            <h1 className="text-white font-bold text-xl">War lucha libre ecuador</h1>

            <div className="flex gap-5">

                <a href="https://www.instagram.com/war_ecuador/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-500 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                </a>

                <a href="https://www.facebook.com/WARluchalibreEC/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                    <SiFacebook className="text-blue-500 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                </a>

            </div>
        </div>
    )
}
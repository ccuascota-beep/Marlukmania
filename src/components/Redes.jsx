import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { SiKick } from "react-icons/si"

export default function Redes() {
    return (
        <div className="  px-6 py-4 bg-black">

            <h1 className="text-white font-bold text-xl">MARLUKMANIA</h1>

            <div className="flex gap-5">

                <a href="https://www.instagram.com/michaelstevem/?hl=es-la" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-500 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                </a>

                <a href="https://www.tiktok.com/@michaelsteve?lang=es" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="text-white w-6 h-6 hover:scale-110 transition cursor-pointer" />
                </a>

                <a href="https://kick.com/marluking_on_fire" target="_blank" rel="noopener noreferrer">
                    <SiKick className="text-green-500 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                </a>

                <a href="https://www.youtube.com/@MarluKingExclusive" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-red-600 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                </a>

                <a href="https://www.youtube.com/@SUERTE-TV/featured" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-red-600 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                </a>


            </div>

        </div>
    )
}
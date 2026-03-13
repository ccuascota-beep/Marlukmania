import { useState } from "react";
import Modal from "../components/Modal";
import {FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import {SiKick} from "react-icons/si";

export default function Campeones() {

    const [modalOpen, setModalOpen] = useState(false);
    const [campeon, setCampeon] = useState(null);

    const abrirModal = (nombre) => {
        setCampeon(nombre);
        setModalOpen(true);
    };

    return (
        <>
            <div className="flex justify-center gap-10 mt-10">

                <div
                    onClick={() => abrirModal("yalmar")}
                    className="relative w-[355px] overflow-hidden rounded-lg group transition duration-300 hover:-translate-y-2 cursor-pointer"
                >

                    <img
                        src="/Luchadores/yalmar1.jpg"
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                    <div className="absolute bottom-4 left-4 text-white">
                        <h1 className="text-2xl font-bold">Yalmar</h1>
                        <p className="text-sm">Ex campeón Marlukmania</p>
                    </div>

                </div>


                <div
                    onClick={() => abrirModal("jaguar")}
                    className="relative w-[375px] overflow-hidden rounded-lg group transition duration-300 hover:-translate-y-2 cursor-pointer"
                >

                    <img
                        src="/Luchadores/jaguar.jpg"
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                    <div className="absolute bottom-4 left-4 text-white">
                        <h1 className="text-2xl font-bold">Jaguar</h1>
                        <p className="text-sm">Campeón actual Marlukmania</p>
                    </div>

                </div>

            </div>


            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>

                {campeon === "yalmar" && (
                    <div className="grid md:grid-cols-2 gap-8">

                        <img
                            src="/Luchadores/yalmar1.jpg"
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-4xl font-bold drop-shadow-[0_0_15px_#00f]">Yalmar</h1>
                            <p className="text-gray-400 mt-2">Ex campeón Marlukmania</p>

                            <p className="mt-4 text-gray-300">
                                Yalmar fue uno de los campeones más dominantes de Marlukmania.
                                Durante su reinado defendió el campeonato contra varios
                                luchadores importantes del evento.
                            </p>
                            <div className="  px-6 py-5 bg-black">

                                <div className="flex flex-col gap-3">

                                    <a href="https://www.instagram.com/yalmarrrr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        <FaInstagram className="text-pink-500 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                                        <span className="text-white">yalmarrrr</span>
                                    </a>

                                    <a href="https://www.tiktok.com/@guineomosqueado" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        <FaTiktok className="text-white w-6 h-6 hover:scale-110 transition cursor-pointer" />
                                        <span className="text-white">Yalmar (chiclebomba)</span>
                                    </a>

                                    <a href="https://kick.com/yalmarrr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        <SiKick className="text-green-500 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                                        <span className="text-white">yalmarrr</span>
                                    </a>

                                    <a href="https://www.youtube.com/@yalmarrrkick" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        <FaYoutube className="text-red-600 w-6 h-6 hover:scale-110 transition cursor-pointer" />
                                        <span className="text-white">Yalmarrr Kick</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {campeon === "jaguar" && (
                    <div className="grid md:grid-cols-2 gap-8">

                        <img
                            src="/Luchadores/jaguar.jpg"
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-4xl font-bold drop-shadow-[0_0_15px_#00f]">Jaguar</h1>
                            <p className="text-yellow-400 mt-2">Campeón actual Marlukmania</p>

                            <p className="mt-4 text-gray-300">
                                Jaguar es el actual campeón de Marlukmania.
                                Conocido por su velocidad y agresividad en el ring,
                                logró conquistar el campeonato en una lucha histórica.
                            </p>
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
                        </div>
                    </div>
                )}

            </Modal>
        </>
    );
}
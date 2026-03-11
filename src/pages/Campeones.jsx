import { useState } from "react";
import Modal from "../components/Modal";

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
                            <h1 className="text-4xl font-bold">Yalmar</h1>
                            <p className="text-gray-400 mt-2">Ex campeón Marlukmania</p>

                            <p className="mt-4 text-gray-300">
                                Yalmar fue uno de los campeones más dominantes de Marlukmania.
                                Durante su reinado defendió el campeonato contra varios
                                luchadores importantes del evento.
                            </p>
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
                            <h1 className="text-4xl font-bold">Jaguar</h1>
                            <p className="text-yellow-400 mt-2">Campeón actual Marlukmania</p>

                            <p className="mt-4 text-gray-300">
                                Jaguar es el actual campeón de Marlukmania.
                                Conocido por su velocidad y agresividad en el ring,
                                logró conquistar el campeonato en una lucha histórica.
                            </p>
                        </div>

                    </div>
                )}

            </Modal>
        </>
    );
}
import { useState } from "react";
import Modal from "../components/Modal";
import CardLuchador from "../components/CardLuchador";
import secciones from "../data/luchadores.js";

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiKick } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Luchadores() {

    const [modalOpen, setModalOpen] = useState(false);
    const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

    const abrirModal = (persona) => {
        setPersonaSeleccionada(persona);
        setModalOpen(true);
    };

    return (
        <>
            <div className="mt-10 space-y-16 mb-10">

                {secciones.map((seccion) => (
                    <div key={seccion.titulo}>

                        <h1 className="text-3xl text-black text-center font-bold mb-6">
                            {seccion.titulo}
                        </h1>

                        <div className="flex flex-wrap justify-center gap-10">

                            {seccion.personas.map((persona) => (
                                <CardLuchador
                                    key={persona.id}
                                    persona={persona}
                                    onClick={abrirModal}
                                />
                            ))}

                        </div>

                    </div>
                ))}

            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>

                {personaSeleccionada && (
                    <div className="grid md:grid-cols-2 gap-8">

                        <img
                            src={personaSeleccionada.imagen}
                            className="rounded-xl"
                        />

                        <div>
                            <h1 className="text-4xl font-bold">
                                {personaSeleccionada.nombre}
                            </h1>

                            <p className="mt-4 text-gray-300">
                                {personaSeleccionada.descripcion}
                            </p>

                            <div className="mt-6 flex flex-col gap-3">

                                {personaSeleccionada.redes.instagram && (
                                    <a href={personaSeleccionada.redes.instagram} target="_blank" className="flex items-center gap-3">
                                        <FaInstagram className="text-pink-500 w-6 h-6" />
                                        <span>Instagram</span>
                                    </a>
                                )}

                                {personaSeleccionada.redes.tiktok && (
                                    <a href={personaSeleccionada.redes.tiktok} target="_blank" className="flex items-center gap-3">
                                        <FaTiktok className="text-white w-6 h-6" />
                                        <span>TikTok</span>
                                    </a>
                                )}

                                {personaSeleccionada.redes.youtube && (
                                    <a href={personaSeleccionada.redes.youtube} target="_blank" className="flex items-center gap-3">
                                        <FaYoutube className="text-red-600 w-6 h-6" />
                                        <span>YouTube</span>
                                    </a>
                                )}

                                {personaSeleccionada.redes.kick && (
                                    <a href={personaSeleccionada.redes.kick} target="_blank" className="flex items-center gap-3">
                                        <SiKick className="text-green-500 w-6 h-6" />
                                        <span>Kick</span>
                                    </a>
                                )}

                                {personaSeleccionada.redes.twitter && (
                                    <a href={personaSeleccionada.redes.twitter} target="_blank" className="flex items-center gap-3">
                                        <FaXTwitter className="text-white w-6 h-6" />
                                        <span>X (Twitter)</span>
                                    </a>
                                )}



                            </div>

                        </div>

                    </div>
                )}

            </Modal>
        </>
    );
}
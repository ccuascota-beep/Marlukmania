export default function InformationEvent() {
    return (
        <section className="w-full py-20 flex justify-end pr-[1%]">
            <div className="max-w-4xl w-full px-4 grid md:grid-cols-2 gap-6 items-center">

                <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
                        ¿Qué es la Marlukmania?
                    </h1>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        Marlukmania es un evento ecuatoriano de lucha libre estilo espectáculo creado y producido por el creador de contenido Michael Steven.
                        Combina combates de wrestling, entretenimiento en vivo y participación del público.
                    </p>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        Se realiza en colaboración con WAR Lucha Libre Ecuador con el objetivo de impulsar la lucha libre independiente en Ecuador.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className=" rounded-xl p-3 max-w-sm w-full">
                        <img
                            src="/images/portada.jpg"
                            alt="Marlukmania"
                            className="w-full max-h-[250px] object-contain rounded-lg"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
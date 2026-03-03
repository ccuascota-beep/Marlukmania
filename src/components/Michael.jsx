export default function Michael() {
    return (
        <section className="w-full py-8 flex justify-start">
            <div className="ml-[1%] max-w-4xl w-full px-4 grid md:grid-cols-2 gap-6 items-center">

                <div className="flex justify-center">
                    <div className="rounded-xl p-3 max-w-sm w-full">
                        <img
                            src="/images/michael.jpg"
                            alt="Michael Steven"
                            className="w-full max-h-[250px] object-contain rounded-lg "
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
                        Michael Steven
                    </h1>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        Michael Steven(Zorrito Lalangui) es un creador de contenido ecuatoriano conocido por su actividad en Instagram y TikTok,
                        donde produce contenido de entretenimiento, humor y estilo de vida.
                    </p>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        Además, ha producido Marlukmania en colaboración con WAR Lucha Libre Ecuador,
                        impulsando la lucha libre independiente en el país.
                    </p>
                </div>

            </div>
        </section>
    );
}
export default function CardLuchador({ persona, onClick }) {
    return (
        <div
            onClick={() => onClick(persona)}
            className="relative w-[280px] overflow-hidden rounded-lg group hover:-translate-y-2 transition cursor-pointer"
        >
            <img
                src={persona.imagen}
                className="w-full transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-xl font-bold">{persona.nombre}</h1>
            </div>
        </div>
    );
}
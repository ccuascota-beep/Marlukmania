export default function Campeones() {
    return (
        <div className="flex justify-center gap-10 mt-10">

            <div className="relative w-[350px] overflow-hidden rounded-lg group transition duration-300 hover:-translate-y-2 ">

                <img
                    src="/Luchadores/yalmar1.jpg"
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                <div className="absolute bottom-4 left-4 text-white ">
                    <h1 className="text-2xl font-bold">Yalmar</h1>
                    <p className="text-sm">Ex campeón Marlukmania</p>
                </div>

            </div>

            <div className="relative w-[420px] overflow-hidden rounded-lg group transition duration-300 hover:-translate-y-2">

                <img
                    src="/Luchadores/jaguar.jpg"
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                <div className="absolute bottom-4 left-4 text-white ">
                    <h1 className="text-2xl font-bold">Jaguar</h1>
                    <p className="text-sm">Campeón actual Marlukmania</p>
                </div>

            </div>

        </div>

    )
}
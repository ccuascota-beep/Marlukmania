import Photos from "../components/Photos.jsx";

export default function Home() {

    return (
        <>
            <div className="bg-black flex items-center p-4">
                <img src= "https://files.kick.com/images/user/35972683/profile_image/conversion/425b91fe-7edb-41bf-9034-3cf79c449660-fullsize.webp"
                     width="140"
                     height="200"
                />
                <div className="flex flex-col items-center flex-1">
                    <h1 className="text-6xl font-extrabold text-white tracking-wider drop-shadow-[0_0_15px_#00f]">MARLUKMANIA</h1>
                    <h1 className="text-2xl font-extrabold text-blue-200 tracking-wide">Mas que luchas</h1>
                </div>
            </div>

            <div className= "flex justify-center gap-16 bg-[#111] py-4">
                <button
                    className="ml-36 uppercase text-gray-300 text-lg font-semibold tracking-widest hover:text-white transition-all"
                >Luchas
                </button>

                <button
                    className="uppercase text-gray-300 text-lg font-semibold tracking-widest hover:text-white transition-all"
                >Luchadores
                </button>

                <button
                    className="uppercase text-gray-300 text-lg font-semibold tracking-widest hover:text-white transition-all"
                >Campeones
                </button>
            </div>
            <div  className= "flex justify-center gap-16 bg-[#111] py-4">
                <h1 className=" ml-26 uppercase text-gray-300 text-lg font-semibold tracking-widest hover:text-white transition-all">Peleas</h1>
            </div>
            <Photos/>


        </>
    )
}
import Photos from "../components/Photos.jsx";
import InformationEvent from "../components/InformationEvent.jsx";
import Michael from "../components/Michael.jsx";
import Redes from "../components/Redes.jsx";
import War from "../components/War.jsx";

export default function Home() {

    return (
        <>
            <br/>
            <div  className= "flex justify-center gap-16 bg-[#111] py-4">
                <h1 className=" ml-2 uppercase text-gray-300 text-lg font-semibold tracking-widest hover:text-white transition-all">Peleas</h1>
            </div>

            <Photos/>
            <br/>
            <InformationEvent/>
            <br/>
            <Michael/>
            <br/>
            <header>
                <Redes/>
                <War/>
            </header>

        </>
    )
}
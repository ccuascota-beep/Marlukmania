import Photos from "../components/Photos.jsx";
import InformationEvent from "../components/InformationEvent.jsx";
import Michael from "../components/Michael.jsx";

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

        </>
    )
}
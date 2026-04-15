import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Heder.jsx";
import Redes from "./components/Redes.jsx";
import War from "./components/War.jsx";

import Home from "./pages/Home";
import Luchas from "./pages/Luchas";
import Campeones from "./pages/Campeones";
import Luchadores from "./pages/Luchadores";

function App() {
    return (
        <BrowserRouter>

            <div className="flex flex-col min-h-screen">
                <Header />

                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Luchas" element={<Luchas />} />
                        <Route path="/Campeones" element={<Campeones />} />
                        <Route path="/Luchadores" element={<Luchadores />} />
                    </Routes>

                </div>
                <Redes />
                <War />
            </div>

        </BrowserRouter>
    );
}

export default App;App
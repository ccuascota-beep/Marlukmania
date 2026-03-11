import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Heder.jsx";
import Home from "./pages/Home"
import Luchas from "./pages/Luchas"
import Campeones from "./pages/Campeones"
import Luchadores from "./pages/Luchadores"

function App() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Luchas" element={<Luchas />} />
                <Route path="/Campeones" element={<Campeones />} />
                <Route path="/Luchadores" element={<Luchadores /> } />
            </Routes>

        </BrowserRouter>
    )
}

export default App
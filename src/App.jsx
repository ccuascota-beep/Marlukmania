import Home from "./pages/Home.jsx";
import Luchas from "./pages/Luchas.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/luchas" element={<Luchas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
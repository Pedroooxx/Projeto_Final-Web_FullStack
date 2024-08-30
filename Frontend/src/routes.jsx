import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Character from "./pages/Character/Character";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/character" element={<Character />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
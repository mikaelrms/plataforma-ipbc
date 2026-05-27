import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/home/home"
import NavBar from "../pages/layout/navbar/navbar"
import Login from "../pages/login/login"

export default function Router () {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
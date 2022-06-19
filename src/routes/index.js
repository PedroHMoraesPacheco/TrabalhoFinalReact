import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
<<<<<<< Updated upstream
import { Cadastro } from "../pages/Cadastro";
=======
import { Categoria } from '../pages/Categoria'
>>>>>>> Stashed changes


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
<<<<<<< Updated upstream
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
=======
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/categoria" element={<Categoria/>}/>
               
>>>>>>> Stashed changes
            </Routes>
        </BrowserRouter>
    )
}
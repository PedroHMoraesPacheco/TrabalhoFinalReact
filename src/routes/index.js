import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Cadastro } from "../pages/Cadastro";
import { Categoria } from '../pages/Categoria'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/categoria" element={<Categoria/>}/>
            </Routes>
        </BrowserRouter>
    )
}
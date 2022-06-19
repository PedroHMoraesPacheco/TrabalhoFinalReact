import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import {Cadastro} from "../pages/Cadastro";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro></Cadastro>}/>
            </Routes>
        </BrowserRouter>
    )
}
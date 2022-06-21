import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Cadastro } from "../pages/Cadastro";
import { Categoria } from '../pages/Categoria'
import Footer from "../components/Footer/footer";
import { Header } from "../components/Header";
import { Produtos } from "../pages/Produtos";



export function AppRoutes() {
    return (
        <BrowserRouter>
          <Header/>
            <Routes>
             <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/categoria" element={<Categoria/>}/>
                <Route path="/produto" element={<Produtos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
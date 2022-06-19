import React from 'react';
import eco from './img.png';
import './styles.css';


export function Home() { 
  return (
   <section className="home_container">
        <h1 >Bem-Vindo a <span>Ecommerch</span></h1>
        <p>Qualidade de Produtos é aqui!</p> 
        <a href='/'>Conferir Produtos</a>

        <img src={eco} alt="img"/>
    </section>

  )
}



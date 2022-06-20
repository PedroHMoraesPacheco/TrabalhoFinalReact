import React from 'react';
import Button from '../../components/Button';
import { ProfileCard } from '../../components/CardProduto';
import eco from './img.png';
import './styles.css';


export function Home() { 
  return (
   <section className="home_container">
        <h1 >Bem-Vindo a <span>Ecommerch</span></h1>
        <p>Qualidade de Produtos é aqui!</p> 
        <Button to={'/produto'} text='Confira nossos Produtos'/>
        <ProfileCard/>
        <img src={eco} alt="img"/>
    </section>

  )
}



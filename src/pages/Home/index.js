import React, { useEffect,useState } from 'react';
import Button from '../../components/Button';
import eco from './img.png';
import './styles.css';

import ProductService from './../../services/products'

export function Home() {
  const [products,setProducts]=useState([{}])
  useEffect(()=>{
    ProductService.GetProduct().then(res=>{
      setProducts(res.data)
    }).catch(e=>{
      console.log(e)
    })
  },[])
  return (
    <>
   <section className="home_container">
        <h1 >Bem-Vindo a <span>Ecommerch</span></h1>
        <p>Qualidade de Produtos é aqui!</p> 
        <Button to={'/vitrine'} text='Confira nossos Produtos' /><br></br>
        <Button to={'/categoria'} text='Escolha a Categoria dos Produtos' /><br></br>
        <img src={eco} alt="img"/>
    </section>
    {products.map(product=>(
      <Card product={product}/>
    ))}
    </>

  )
}



import { Card } from "../../components/CardProduto";
import './styles.css'
import React, { useEffect,useState } from 'react';
import ProductService from './../../services/products'



export function Vitrine(){
    const [products,setProducts]=useState([{}])
    useEffect(()=>{
      ProductService.GetProduct().then(res=>{
        setProducts(res.data)
      }).catch(e=>{
        console.log(e)
      })
    },[])
   
    return(
    
        <div className="grid-container" style={{}}>
        {products.map(product=>(
      <Card product={product}/>
      
     ))}
        </div>
        
        
    )
}
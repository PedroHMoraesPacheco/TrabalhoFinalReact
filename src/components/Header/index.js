import React from 'react'
import Button from '../Button';
import './styles.css';
import img from './Mplace.png'

export function Header() {
  return (
    <>
        
        <div className="header">
          <img src={img} alt='market'/>
           <h2><Button to={'/'} text='Home' /></h2>
           <h2><Button to={'/categoria'} text='Categorias' /></h2>
           <h3><Button to ={'/login'} text='Login' /></h3>
        </div>
   </>     
  )
}
import React from 'react'
import Button from '../Button';
import './styles.css';

export function Header() {
  return (
        <div className="header">
           <h2><Button to={'/'} text='Home' /></h2>
           <h2><Button to={'/categoria'} text='Categorias' /></h2>
           <h3><Button to ={'/login'} text='Login' /></h3>
        </div>
  )
}
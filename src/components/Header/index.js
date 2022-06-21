import React from 'react'
import Button from '../Button';
import './styles.css';

export function Header() {
  return (
        <div className="header">
           <h1><Button to={'/'} text='ECOMMERCH' /></h1>
           <h6><Button to ={'/login'} text='Login' /></h6>
        </div>
  )
}
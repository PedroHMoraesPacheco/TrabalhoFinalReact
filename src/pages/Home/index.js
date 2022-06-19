import React from 'react'
import eco from './img.png'
import styles from './styles.css'

export function Home() { 
  return (
   <section className={styles.home_container}>
        <h1 >Bem-Vindo a <span>Ecommerch</span>
        </h1>
        <h2>Qualidade de Produtos é aqui!</h2> 
        <img src={eco} alt="img"/>
    </section>

  )
}



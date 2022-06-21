import { Link } from 'react-router-dom'

import Container from './Container'

import styles from 'react'
import logo from '../../img/header.jpg'
    
    function NavBar(){
        return (
          <nav class={styles.NavBar}>
            <Container>
             <Link to="/">
              <img src={logo} alt="TRABALHOFINALREACT" />
             </Link>
             <ul class={styles.list}>
              <li class={styles.item}>
             <Link to="/">Home</Link>
              </li>
              <li class={styles.item}>
              <Link to="/contact">Projetos</Link>
              </li>
              <li class={styles.item}>
             <Link to="/projects">Contato</Link>
             </li>
             <li class={styles.item}>
             <Link to="company">Empresa</Link>
             </li>
            </ul>
             <Link to="newproject">Novo projeto</Link>
            </Container>
          </nav>
          
        )
    }

    export default NavBar
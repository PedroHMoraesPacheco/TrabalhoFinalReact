import React from 'react'

import logo from "../../assets/logo2.png";
import { Container } from "./styles";

export const Header = () => {
  return (
        <Container>
        <div className="header">
           {<img src={logo} alt="logo2.png" className="logo"/>}
        </div>
        </Container>
  )
}
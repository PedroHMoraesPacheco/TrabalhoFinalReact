import React from 'react'

import logo from "../../assets/logo.png"
import { Container } from "./styles";

export const Header = () => {
  return (
        <Container>
        <div className="header">
            {<img src={logo} alt="logo.png" className="logo"/>}
            <button className="salmon-btn">+ INFO</button>
        </div>
        </Container>
  )
}


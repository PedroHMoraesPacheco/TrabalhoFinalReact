import React from 'react'

import logo from "../../public/header.jpg";
import { Container } from "./styles";

export const Header = () => {
  return (
        <Container>
        <div className="header">
            <img src={logo} alt="header.jpg" className="logo"/>
            <button className="salmon-btn">+ INFO</button>
        </div>
        </Container>
  )
}

export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import authService from '../../services/auth'
import { Container } from './style';

export function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleLogin() {
    authService.Login(email, password).then(res => {
      console.log(res);
      toast.success('logou')
      localStorage.setItem('token', res.headers.token)
      navigate("/home")
    }).catch(err => {
      toast.error('nao logou')
      console.log(err);
    })
  }

<Container>

</Container>

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', backgroundColor: '#FF4040', width: 500, padding: 50, flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ marginBottom: 20, textAlign: 'center', color: '#FFF' }}>Login</h1>
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='E-mail' required type={'email'} value={email} onChange={e => setEmail(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Senha' required type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
        <button style={{ marginBottom: 20, padding: 15 }} onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  )
}


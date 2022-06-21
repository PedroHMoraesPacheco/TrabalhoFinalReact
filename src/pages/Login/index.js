import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import authService from '../../services/auth'
import { Container } from './styles';

export function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('pedro@gmail.com');
  const [password, setPassword] = useState('123456');

  function handleLogin() {
    authService.Login(email, password).then(res => {
      console.log(res);
      toast.success('Logado com Sucesso!')
      localStorage.setItem('token', res.headers.token)
      navigate("/home")
    }).catch(err => {
      toast.error('Digite seu E-mail ou Senha Novamente')
      console.log(err);
    })
  }

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', backgroundColor: 'black', width: 500, padding: 50, flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ marginBottom: 20, textAlign: 'center', color: 'blueviolet' }}>Login</h1>
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='E-mail' required type={'email'} value={email} onChange={e => setEmail(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Senha' required type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
        <button style={{ marginBottom: 20, padding: 15 }} onClick={handleLogin}>
          Entrar
        </button>
        {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p style={{ color: '#FFF', cursor: 'pointer' }} >Alterar senha</p>
          <p style={{ color: '#FFF', cursor: 'pointer' }} >Cadastre-se</p>
        </div> */}
      </div>
    </div>
  )
}


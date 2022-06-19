import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import cadastroService from '../../services/cadastro'

export function Cadastro() {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [telefone, setTelefone] = useState();
  const [data, setData] = useState();

  function handleCadastro() {
    cadastroService.Cadastro(nome,email,username, password,cpf,telefone,data).then(res => {
      console.log(res);
      toast.success('Cadastro Efetuado')
      navigate("/")
    }).catch(err => {
      toast.error('ERRO')
      console.log(err);
    })
  }

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', backgroundColor: '#FF4040', width: 500, padding: 50, flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ marginBottom: 20, textAlign: 'center', color: '#FFF' }}>Cadastro</h1>

        <input style={{ marginBottom: 20, padding: 15 }} placeholder='E-mail' required type={'email'} value={email} onChange={e => setEmail(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Senha' required type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Username' required type={'username'} value={username} onChange={e => setUsername(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Nome' required type={'nome'} value={nome} onChange={e => setNome(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Cpf' required type={'cpf'} value={cpf} onChange={e => setCpf(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Data de nascimento' required type={'data'} value={data} onChange={e => setData(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Telefone' required type={'telefone'} value={telefone} onChange={e => setTelefone(e.target.value)} />
        <button style={{ marginBottom: 20, padding: 15 }} onClick={handleCadastro}>
          Cadastrar-se
        </button>
      </div>
    </div>
  )
}

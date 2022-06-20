import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import UploadFiles from '../../components/UploadFiles';

import produtoService from '../../services/products'

export function Produtos() {
  let navigate = useNavigate();

  const [nome, setNome] = useState('camisa');
  const [descricao, setDescricao] = useState('camisa');
  const [preco, setPreco] = useState('12.0');
  const [quantidade_estoque, setQuantidade_estoque] = useState('10');
  const [categoria, setCategoria] = useState('Camisas');
  const [file, setFile] = useState();



  //function handleCadastro() {

  //   produtoService.Create(nome, descricao, preco, quantidade_estoque,categoria,file).then(res => {
  //     uploadImages().then(event =>{
  //       this.setState({
  //         selectedFile: event.target.files[0]
  //         })
  //       })
  //     console.log(res);
  //     toast.success('produto criado')
  //     navigate("/home")
  //   }).catch(err => {
  //     toast.error('ERRO')
  //     console.log(err);
  //   })
  // }

  function handleCadastro(){
    produtoService.CreateNoImg(nome, descricao, preco, quantidade_estoque,categoria).then(res => {
           console.log(res);
           toast.success('produto criado')
           navigate("/home")
    }).catch(err => {
           toast.error('ERRO')
           console.log(err);
        })
  }
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', backgroundColor: '#FF4040', width: 500, padding: 50, flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ marginBottom: 20, textAlign: 'center', color: '#FFF' }}>Cadastro de Produtos</h1>
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Nome' required type={'nome'} value={nome} onChange={e => setNome(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Descrição' required type={'descrição'} value={descricao} onChange={e => setDescricao(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Preço' required type={'preco'} value={preco} onChange={e => setPreco(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Estoque' required type={'quantidade_estoque'} value={quantidade_estoque} onChange={e => setQuantidade_estoque(e.target.value)} />
        <input style={{ marginBottom: 20, padding: 15 }} placeholder='Categoria' required type={'categoria'} value={categoria} onChange={e => setCategoria(e.target.value)} />
        {/* <input style={{ marginBottom: 20, padding: 15 }} placeholder='File' required type={"file"} value={file} onChange={e => setFile(e.target.value)} /> */}
        <button style={{ marginBottom: 20, padding: 15 }} onClick={handleCadastro}>
          Cadastrar
        </button>
      </div>
    </div>
  )
}
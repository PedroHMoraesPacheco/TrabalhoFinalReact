import  './categoriaFormStyle.css'
import Input from '../Form/input'
import Button from '../../components/Button';

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import cadastroService from '../../services/category'


export default function CategoriaForm () {
    let navigate = useNavigate();
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();

    function handleCadastroCategoria() {
        cadastroService.CadastroCategoria(nome, descricao).then(res => {
          console.log(res);
          toast.success('Categoria Cadastrada')
          navigate("/")
        }).catch(err => {
          toast.error('ERRO')
          console.log(err);
        })
      }


    return (
        <>
        <form className= 'form'>
            <Input 
                type="text"
                text="Nome da Categoria" 
                name="name" 
                placeholder="Insira o nome da categoria"
            />

            <Input 
                type="text"
                text="Descrição da Categoria" 
                name="name" 
                placeholder="Insira a descrição da categoria"
            />
                    <div className='div'>
                          <Button to={'/categoria'} text='Cadastro' onClick={handleCadastroCategoria}/> 
                    </div>       
                    <div className='div'>
                          <Button to={'/categoria'} text='Listagem'/>
                    </div>               
                    
        </form>

        </>
        

    )

}

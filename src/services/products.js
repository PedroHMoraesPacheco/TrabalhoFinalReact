import { api } from './http';

const Create = (nome, descricao, preco, quantidade_estoque)=>{
    return api.post(`produto/imagem`,{
        nome:nome,
        descricao:descricao,
        preco:preco,
        quantidade_estoque:quantidade_estoque,
    })
}

const CreateNoImg=(nome, descricao, preco, quantidade_estoque, categoria)=>{
    return api.post(`produto`),{
        nome:nome,
        descricao:descricao,
        preco:preco,
        quantidade_estoque:quantidade_estoque,
        categoria:categoria
    }
}

export default {
    Create, CreateNoImg
}
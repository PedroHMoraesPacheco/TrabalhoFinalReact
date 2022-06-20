import { api } from './http';

const Create = (nome, descricao, preco, quantidade_estoque)=>{
    return api.post(`produto`,{
        nome:nome,
        descricao:descricao,
        preco:preco,
        quantidade_estoque:quantidade_estoque,
    })
}

export default {
    Create
}
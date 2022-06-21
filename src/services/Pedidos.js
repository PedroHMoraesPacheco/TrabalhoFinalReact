import { api } from './http';

const PostPedido = (id,nome,quantidade) => {
    return api.post(`pedido/compra/`, {
    })
}
const GetPedidos=(id)=>{
    return api.get(`pedido`,{
        id:id
    })
}
export default {
    PostPedido,GetPedidos
}
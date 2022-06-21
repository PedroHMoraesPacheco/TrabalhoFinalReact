import { api } from './http'

const Create = (nome, descricao) => {

    return api.post (`categoria/cadastro`, {
        nome : nome,
        descricao: descricao

    })
}
export default {
    Cadastro,
}
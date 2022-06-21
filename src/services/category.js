import { api } from './http'

const CadastroCategoria = (nome, descricao) => {

    return api.post (`categoria/cadastro`, {
        nome : nome,
        descricao: descricao

    })
}
export default {
    CadastroCategoria,
}
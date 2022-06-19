import { api } from './http'

const Cadastro = (nome, email, username, password, cpf, telefone) => {
    return api.post(`cliente/cadastro`, {
        nome: nome,
        email: email,
        username: username,
        senha: password,
        telefone: telefone,
        cpf: cpf
    })
}


export default {
    Cadastro,
}
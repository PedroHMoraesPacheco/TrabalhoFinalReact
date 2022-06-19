import { api } from './http'

const Cadastro = (nome, email, username, password, cpf, telefone, data) => {
    return api.post(`cliente/cadastro`, {
        email: email,
        senha: password,
        nome: nome,
        username: username,
        cpf: cpf,
        telefone: telefone,
        data: data,
        role: "cliente"
    })
}


export default {
    Cadastro,
}
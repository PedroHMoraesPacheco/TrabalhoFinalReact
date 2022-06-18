import { api } from './http'

const Login = (email, password) => {
    return api.post(`login`, {
        email: email,
        senha: password
    })
}


export default {
    Login,
}
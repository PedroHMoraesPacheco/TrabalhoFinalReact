import { api } from './http';



  const  Create = (file,nome, descricao, preco, quantidade_estoque)=>{

    var axios = require('axios');
    var FormData = require('form-data');
    var fs = require('fs');
    var data = new FormData();

    data.append('file', fs.createReadStream('/C:/Users/Pedro/Downloads/camisa-sublimacao-poliester.jpg'));
    data.append(nome, descricao,preco,quantidade_estoque,{contentType: 'application/json'});
        
    var config = {
        method: 'post',
        url: 'localhost:8080/ecommerce/produto/imagem',
        data : data
      };

    axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}
const getFiles=(id)=>{
        return api.get(`/produto/imagem/{id}`);
}

const GetProduct=()=>{
  return api.get('produto')
  
}

// const CreateNoImg=(nome, descricao, preco, quantidade_estoque, categoria)=>{

    

//     formData.append('name', 'nome');   
//     formData.append('preco', 'preco');

//     return api.post(`produto`),{
//         nome:nome,
//         descricao:descricao,
//         preco:preco,
//         quantidade_estoque:quantidade_estoque,
//         categoria:categoria
//     }
// }

export default {
    Create,
    GetProduct
}
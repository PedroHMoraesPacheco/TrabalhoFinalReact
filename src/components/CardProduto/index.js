import React,{useState} from "react";
import './styles.css';
import ProductService from './../../services/products'
import PedidoService from './../../services/Pedidos'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export const Card=({product})=>{

    let navigate = useNavigate();
    const[addbag,setaddbag]=useState(0);
    
    const AddBag=()=>{
    if(addbag<10){ setaddbag(addbag+1); } };
     const DecBag=()=>{
        if(addbag>=1){
        setaddbag(addbag-1);
        }

    };

    function Success(){
        toast.success('Compra Efetuada')
    }
 console.log(product)
    return(
        
        <>

         <div className="all">
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src="https://ae01.alicdn.com/kf/Saa2c52ecde8e48968ec05ace8ba6fad23/Jaqueta-de-estilo-universit-rio-chama-peluda-retalhos-couro-do-plut-nio-jaqueta-masculina-inverno-streetwear.jpg_Q90.jpg_.webp" alt="img" width={150} /> 
                    </div> 
                    <div className="vitamin">
                        <h2>{product.nome}</h2>
                    </div>
                    <div className="money_bag">
                            <h3>R${product.preco}</h3>
                            <button onClick={Success}><i className="fa fa-shopping-bag"></i>Adicionar ao Carrinho</button>
                        </div>
                    <div className="size">

                        <h5>Sizes:    <span> P/M/G/GG</span></h5>
                    </div>
                    <div className="gender">
                        <span>Masculino</span>
                        <span>Feminino</span>
                    </div>
                    <div className="last_buttons">
                        <div className="qty_btn">
                            <i onClick={DecBag} className="fa fa-minus">-</i>
                            <p>{addbag}</p>
                            <i onClick={AddBag} className="fa fa-plus">+</i>
                        </div>
                    </div>
                </div>
            </div>
            </div>     
            
      
        </>
        );
}
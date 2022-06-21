import React from "react";
import './styles.css';

export const ProfileCard=({to, text})=>{
    const{useState}=React;
    const[addbag,setaddbag]=useState(1);
    
    const AddBag=()=>{
    if(addbag<10){ setaddbag(addbag+1); } };
     const DecBag=()=>{
        if(addbag>=1){
        setaddbag(addbag-1);
        }
    };
    return(
        <>
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src="https://imgur.com/VcypK5c.png" alt="img" width={10} /> 
                    </div> 
                    <div className="vitamin">
                        <h3>Camisa</h3>
                    </div>
                    <div className="size">
                        <p>Vestimentas</p>
                        <h5>Size : P</h5>
                    </div>
                    <div className="gender">
                        <span>Masculino</span>
                        <span>Feminino</span>
                        <span>Ambos</span>
                    </div>
                    <div className="last_buttons">
                        <div className="qty_btn">
                            <i onClick={DecBag} className="fa fa-minus"></i>
                            <p>{addbag}</p>
                            <i onClick={AddBag} className="fa fa-plus"></i>
                        </div>
                        <div className="money_bag">
                            <h3>$23</h3>
                            <button onClick={AddBag}><i className="fa fa-shopping-bag"></i>Adicionar ao Carrinho</button>
                        </div>
    
                    </div>
                </div>
            </div>
    
    
        </>
        );
}
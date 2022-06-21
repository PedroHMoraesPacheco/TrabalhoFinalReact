import React from "react";
import './styles.css';

export const Card=({to, text})=>{
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
         <div className="all">
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src="https://ae01.alicdn.com/kf/Saa2c52ecde8e48968ec05ace8ba6fad23/Jaqueta-de-estilo-universit-rio-chama-peluda-retalhos-couro-do-plut-nio-jaqueta-masculina-inverno-streetwear.jpg_Q90.jpg_.webp" alt="img" width={150} /> 
                    </div> 
                    <div className="vitamin">
                        <h2>Jaqueta Aesthetic Universitário</h2>
                    </div>
                    <div className="money_bag">
                            <h3>R$165,00</h3>
                            <button onClick={AddBag}><i className="fa fa-shopping-bag"></i>Adicionar ao Carrinho</button>
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
            <div className="all">
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src="https://ae01.alicdn.com/kf/H73ae29fe01634dfe957827b6e94b207ar/Jaqueta-feminina-b-sica-gola-virada-para-baixo-z-per-harajuku-el-stica-bf-chique-estilo.jpg_Q90.jpg_.webp" alt="img" width={150} /> 
                    </div> 
                    <div className="vitamin">
                        <h2>Jaqueta com gola virada para Baixo</h2>
                    </div>
                    <div className="money_bag">
                            <h3>R$135,90</h3>
                            <button onClick={AddBag}><i className="fa fa-shopping-bag"></i>Adicionar ao Carrinho</button>
                        </div>
                    <div className="size">

                        <h5>Sizes:    <span> P/M/G</span></h5>
                    </div>
                    <div className="gender">
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
            <div className="all">
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src="https://ae01.alicdn.com/kf/H434029587c7a4ca5bde72301341e4152Z/Hybskr-camiseta-masculina-gr-fica-camiseta-solta-de-manga-curta-com-letras-camiseta-de-tamanho-grande.jpg_Q90.jpg_.webp" alt="img" width={150} /> 
                    </div> 
                    <div className="vitamin">
                        <h2>Camisa Preta Oversized</h2>
                    </div>
                    <div className="money_bag">
                            <h3>R$65,70</h3>
                            <button onClick={AddBag}><i className="fa fa-shopping-bag"></i>Adicionar ao Carrinho</button>
                        </div>
                    <div className="size">

                        <h5>Sizes:    <span> G/GG/XGG</span></h5>
                    </div>
                    <div className="gender">
                        <span>Masculino</span>
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
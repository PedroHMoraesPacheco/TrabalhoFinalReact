import React from "react";
import Button from "../Button";

export const ProfileCard=()=>{
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
                    <div className="top_part">
                        <div className="circle">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {/* <div className="image"> */}
                        {/* <img src="https://images-na.ssl-images-amazon.com/images/I/61NtVBMOmLL._AC_SL1010_.jpg" alt="img" /> */}
                    {/* </div> */}
                    <div className="vitamin">
                        <h3>True Skin Vitamin C</h3>
                    </div>
                    <div className="size">
                        <p>with Hyaluronic acid and Vitamin E</p>
                        <h5>Size : 1 FL Oz</h5>
                    </div>
                    <div className="buttons">
                        <Button>1 FL Oz<p>1 option from $23</p></Button>
                        <Button>2 FL Oz<p>$43($21/FL Oz)</p></Button>
                    </div>
                    <h4>Select Gender</h4>
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
                            <Button onClick={AddBag}><i className="fa fa-shopping-bag"></i>Adicionar ao Carrinho</Button>
                        </div>
    
                    </div>
                </div>
            </div>
    
    
        </>
        );
        }
    
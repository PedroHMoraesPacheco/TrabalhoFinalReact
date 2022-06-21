import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import produtoService from '../../services/products'

export const Cart=({product})=>{

  let navigate = useNavigate();

  return(
    <>
      <div id="cart-wrap">
        
        <div id="cart-products"></div>
      
        
        <div id="cart-items"></div>
      </div>
      <template id="template-product">
      <div class="p-item">
        <img class="p-img"/>
        <div class="p-name"></div>
        <div class="p-desc"></div>
        <div class="p-price"></div>
        <button class="cart p-add">Add To Cart</button>
      </div>
      </template>
      

      <template id="template-cart">
      <div class="c-item">
        <div class="c-name"></div>
        <button class="c-del cart">X</button>
        <input class="c-qty" type="number" min="0"/>
      </div>
      </template>
      <template id="template-cart-checkout">
        <button class="c-empty cart" onClick="cart.nuke()">Empty</button>
        <button class="c-checkout cart" onClick="cart.checkout()">Checkout</button>
      </template>

    </>
  )
}
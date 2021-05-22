import React from 'react';
import axios from 'axios';

import './cartItem.styles.css';

const CartItem = (props) => {
    const {itemId, name, quantity, price, image } = props;
    return(   
        <div className = 'cart-items'>
            <div className = 'image-container'>
                <img src={image} alt = 'item'/>
            </div>
            <span className = 'name'>{name}</span>
            <span className = 'quantity'>{quantity}</span>
            <span className = 'price'>{price}</span>
            {console.log(name)}
            <div className = 'remove' onClick ={()=>{deleteCartItem(props._id)}}>
                &#10005;
            </div>
        </div>     
    );

    
}
const deleteCartItem = (id)=>{
    let data = {
        userId : "u007"
    }
    axios.delete('http://localhost:5000/stock-api/cart/' + id, data)
  .then(response => { 
      console.log(response.data)
      console.log(id)
     window.location = '/cart';
    })
  .catch(e=>{
      console.log(e)
  });

}

export default CartItem;
import React from 'react';
import './item.styles.css';
import Button from '../Button/button.component';
import axios from 'axios';

function Item (props) {
    return(
    <div className = 'collection-item'>
        <div
            className = 'image'
            style = {{
                backgroundImage : `url(${props.ImgUrl})`
            }}
        />
        <div className = 'item-footer'>
            <span className = 'name'>{props.Name}</span>
            <span className = 'price'>{props.Price}</span>
        </div>
        <Button inverted onclick ={()=>{addToCart("u008",props.Name)}}>Add to cart</Button>
    </div>
    );
};
let addToCart = (userId, name) => {
    axios.post('http://localhost:5000/stock-api/cart/'+ userId + name)
      .then(response => { 
          console.log(response.data)
         window.location = '/cart';
        })
      .catch(e=>{
          console.log(e)
      });
}
export default Item;
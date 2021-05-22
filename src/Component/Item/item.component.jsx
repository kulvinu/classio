import React from 'react';
import './item.styles.css';
import Button from '../Button/button.component';
import axios from 'axios';

function Item (props) {
    const item = props.Name;
    const addToCart = () => {
        let data ={
            userId : "u007",
            itemId : "IT1",
            quantity: 1
        }
        axios.post('http://localhost:5000/stock-api/cart' ,data)
          .then(response => { 
              console.log(response.data);
            })
          .catch(e=>{
              console.log(e)
          });
    }
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
        {console.log(props.Name)}
        <Button inverted onClick ={()=>{addToCart()}}>Add to cart</Button>
    </div>
    );
};

export default Item;
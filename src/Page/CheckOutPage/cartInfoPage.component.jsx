import React,{useState,useEffect} from 'react';
import CartItem from '../../Component/CartItem/cartItem.component';
import './cartInfoPage.styles.css';
import axios from 'axios';


const Cart = function(props){
    const userId = "u007";
    const [allItems,setItems] = useState();
    const [totalbill,setTotal] = useState();
    useEffect(() => {
        retriveCartItems();
    }, [])
    const retriveCartItems = ()=>{
        axios.get('http://localhost:5000/stock-api/cart/' + userId)
        .then((res)=>{
            setItems(res.data.items);
            setTotal(res.data.totalBill);
        }).catch(e=>{
            console.log(e)
        })

    }


return(
    <div className = 'cart-item'>
        <div className = 'cart-header'>
            <div className = 'header'>
                <span>Product</span>
            </div>
            <div className = 'header'>
                <span>Name</span>
            </div>
            <div className = 'header'>
                <span>Quantity</span>
            </div>
            <div className = 'header'>
                <span>Price</span>
            </div>
            <div className = 'header'>
                <span>Remove</span>
            </div>
            
        </div>
        {allItems ?(
                allItems.map(item=>{
                    return(
                        <CartItem {...item} key={item._id}></CartItem>
                        
                    );
                })
            ):(<div>Stil loading ...</div>)
        }
        {console.log(allItems)}
        {
            totalbill ?(
                <div className = 'bill'>TOTAL: Rs.{totalbill}</div>
            ):(<div>Stil loading ...</div>)
        }
    </div>
);
}

export default Cart;
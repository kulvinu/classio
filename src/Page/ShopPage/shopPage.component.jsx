import React,{useState,useEffect} from "react";
import Item from '../../Component/Item/item.component'
import './shopPage.styles.css';

import axios from 'axios'

function ShopPage(props){
    const [allItems,setItems] = useState();
    useEffect(() => {
        retriveAllItems();
       
    }, [])

    const retriveAllItems = ()=>{
        axios.get('http://localhost:5000/stock-api/items/')
        .then((res)=>{
            setItems(res.data);
            
        }).catch(e=>{
            console.log(e)
        })

    }

    return(
    <div className="item-container">
        <h1 className='title'>Shop Furniture</h1>
        <div className="row">
             {
            allItems ?(
                allItems.map(item=>{
                    return(
                        <Item {...item} key={item._id}></Item>
                    );
                })
            ):(<div>Stil loading ...</div>)
        }
        </div>      
    </div>);

}

export default ShopPage;
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './delivery.styles.css';

export default function DeliveryDetails( ) {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");



    function sendData(e){
        e.preventDefault();

        const newBuyer={
            name,
            email,
            address,
            phone
        }

        axios.post("http://localhost:8083/api/deliveryD",newBuyer).then(()=>{
            alert("Details Added")
        }).catch((err)=>{
            alert(err)
        })

        /*navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
        });*/
        

        console.log(newBuyer);
        window.location = '/confirm';

    }

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <h1 className = "heading">Checkout</h1>
                <h2>Delivery Details</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name"
                           onChange={(e)=>{
                               setName(e.target.value);
                           }}/>
                </div> <br/>

                <div className="form-group">
                    <label htmlFor="InputEmail">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                </div>
                <br/>

                <div className="form-group">
                    <label htmlFor="address">Shipping Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Shipping Address"
                           onChange={(e)=>{
                               setAddress(e.target.value);
                           }}/>
                </div>
                <br/>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone Number"
                           onChange={(e)=>{
                               setPhone(e.target.value);
                           }}/>
                </div>

                <br/>
                <button type="submit" className="button" ><Link className= "link" to={{
                    pathname: "/pay" }}>Proceed to Payment</Link></button>
            </form>


        </div>

    );
}
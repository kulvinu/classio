import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const CreatePayment = function(props){
    const[paymentID,setPid] =useState("");
    const[cardHolderName,setName] = useState("");
    const[cardNo,setCardNo] = useState("");
    const[expDate, setExpDate] =  useState("");
    const[cvcNo ,setCvcNo] = useState(0);
    const[amount,setAmount] =  useState("");
    const[paymentDate, setDate] =  useState(Date.now);

    const paymentData = {}

    const handlePid = e =>{
        setPid(e.target.value);
    }

    const handleName = e =>{
        setName(e.target.value);

    }

    const handleCardNo = e =>{
        setCardNo(e.target.value);

    }

    const handleExpdate = e =>{
        setExpDate(e.target.value);

    }

    const handleCvcNo = e =>{
        setCvcNo(e.target.value);

    }

    const handleAmount =  e =>{
        setAmount(e.target.value);
    }


   

const createPayment = ()=>{
    let paymentData = {
        paymentID: paymentID,
        cardHolderName: cardHolderName,
        cardNo: cardNo,
        expDate: expDate,
        cvcNo: cvcNo,
        amount: amount,
        paymentDate: paymentDate
        
        
    }

    console.log('payment => ' + JSON.stringify(paymentData));

    axios.post('http://localhost:8082/api/payments',paymentData)
         .then(function (response){
             console.log(response.paymentData)
             window.location = '/';
         }).catch(function(er){
             console.log(er)
         });
    
    //delete all cart items

    

}

    return(

        <div className="submit-form m-5" style={{color:"#52ab98"}}>
            <div className="mb-3">
                <label htmlFor="itemCode" className="form-label">paymentID</label>
                <input type="text" className="form-control" id="pid"  onChange={handlePid}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Type</label>
            <select  className="form-control" aria-label="Default select example"  >
                <option value="Visa" defaultValue="Available">Visa</option>
                <option value="Master" >Master</option>
            </select>
            </div>

            <div className="mb-3">
                <label htmlFor="itemName" className="form-label">Card Holder's name</label>
                <input type="text" className="form-control" id="name"  onChange={handleName}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Card Number</label>
                <input type="number" className="form-control" id="cardNO" required="true" onChange={handleCardNo}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Expire Date</label>
                <input type="text" className="form-control" id="expDate"  onChange={handleExpdate}/>
            </div>
            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">CVC No</label>
                <input type="number" className="form-control" id="cvc"  onChange={handleCvcNo}/>
            </div>

            <div className="mb-3">
                <label htmlFor="itemQuantity" className="form-label">Amount</label>
                <input type="text" className="form-control" id="amount"  onChange={handleAmount}/>
            </div>

           
            
            <div className="col-md-12 text-center">
                 {/* <ViewPayment data={paymentData} /> */}
                <button  className="button"  style={{backgroundColor:"#58ACFA",color:"white"}} onClick={createPayment}><NavLink  to={{
                    pathname: "/view", state: paymentData }}>Submit</NavLink></button>
            </div>    
            
           
        </div>
        
   

    );
}
export default CreatePayment;
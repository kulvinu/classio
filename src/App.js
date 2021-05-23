import React from "react";
import {Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Page/HomePage/homePage.component';
import Header from './Component/Header/header.component';
import ShopPage from './Page/ShopPage/shopPage.component';
import Cart from './Page/CheckOutPage/cartInfoPage.component';
import Delivery from './Component/Delivery/deliveryForm.component';
import Payment from './Component/Payment/payment.component';
import CashPay from './Component/Payment/paymentForm.component';
import MobiPay from './Component/Payment/mobilePaymentForm.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = '/' component={HomePage}/>
        <Route path = '/shop' component={ShopPage}/>
        <Route path = '/cart' component={Cart}/>
        <Route path = '/delivery' component={Delivery} />
        <Route path = '/pay' component={Payment} />
        <Route path = '/cpay' component={CashPay}/>
        <Route path = '/mpay' component={MobiPay}/>
      </Switch>
    </div>
  );
}

export default App;

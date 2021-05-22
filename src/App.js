import React from "react";
import {Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Page/HomePage/homePage.component';
import Header from './Component/Header/header.component';
import ShopPage from './Page/ShopPage/shopPage.component';
import Cart from './Page/CheckOutPage/cartInfoPage.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = '/' component={HomePage}/>
        <Route path = '/shop' component={ShopPage}/>
        <Route path = '/cart' component={Cart}/>
      </Switch>
    </div>
  );
}

export default App;

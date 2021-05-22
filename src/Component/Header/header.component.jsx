import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo1.png';
import CartIcon from '../../assets/shopping-icon.svg';

import './header.styles.css';

const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img className='logo' src = {Logo} alt = "Logo"/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/cart'>
          <img className = 'shopping-cart' src = {CartIcon} alt = "cart"/>
        </Link>
      </div>
    </div>
  );
  
  export default Header;
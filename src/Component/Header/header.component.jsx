import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo1.png';

import './header.styles.css';

const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img className='logo' src = {Logo} alt = "Logo"/>
      </Link>
      <div className='options'>
        <Link className='option' to='/'>
          SHOP
        </Link>
        <Link className='option' to='/'>
          CONTACT
        </Link>
      </div>
    </div>
  );
  
  export default Header;
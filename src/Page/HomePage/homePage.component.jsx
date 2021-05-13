import React from 'react';

import './homePage.styles.css';

const HomePage = () => (
  <div className='homepage'>
    <h1>The All-in-One Furniture Store</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>CHAIRS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>DECOR ITEMS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>CUPBOARDS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>TABLES</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>SOFAS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
//import logo from '../../img/jeremy-bishop-iftBhUFfecE-unsplash.jpg';
import './HomePage.css';
import React, { Component } from "react";
// src/pages/HomePage/HomePageView.js
import HomePageView from './HomePageView';
// import { render } from '@testing-library/react';
import background from '../../img/nattu.jpg';



function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${background})`,
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    flex: 1, justifyContent: 'center',  
    }}>
      Testing
      <HomePageView />
      </div>
  );
}

export default HomePage;
  

    
          

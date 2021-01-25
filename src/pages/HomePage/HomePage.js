import logo from '../../img/jeremy-bishop-iftBhUFfecE-unsplash.jpg';
import './HomePage.css';
import React, { Component } from "react";
// src/pages/HomePage/HomePageView.js
import HomePageView from './HomePageView';



export default class HomePage extends Component {
    render() {
      return (
          <div className= "HomePage">
          <img id="container" src={logo} width="1265" height="650"/>
          <HomePageView />
          </div>
      );
    }
  }

  





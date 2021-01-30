import './HomePage.css';
import React from "react";
import HomePageView from './HomePageView';
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
  

    
          

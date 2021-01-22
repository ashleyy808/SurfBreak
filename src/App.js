
import React, { useEffect,useState } from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';
import { getUser,logout } from './services/userService';
import NavBar from './components/Navbar/NavBar';
//import Header from './components/Header';
//import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
// import DashBoardPage from './pages/DashBoardPage/DashBoardPage';
// import SignupPage from './pages/SignupPage/SignupPage';
//import LoginPage from './pages/LoginPage/LoginPage';
// import StatesPage from './pages/StatesPage/StatesPage';
import SurfSpotPage from './pages/SurfSpotPage/SurfSpotPage';
//import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

import { getCurWeatherByLatLon } from './services/world-weather-api';
//import Map from './components/Map/Map';
import { getCurrentLatLng } from './services/geolocation';


function App(props) {
  const [userState, setUserSate] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  }

  function handleLogout() {
    logout();
    setUserState({
      user: null
    })
    props.history.push('/');
  }
  const [appData, setAppData] = useState({
    lat: null,
    lon: null,
    tempF: null,
    waterTemp_F: null,
    tide: null,
    windspeedMiles: null,
    WindChillF: null,
    swellHeight_ft: null,
    swellDir: null,
    swellPeriod_secs: null,
    icon: ''
  });

  async function getAppData() {
    const data = await getCurrentLatLng();
    const weatherData = await getCurWeatherByLatLon(data.lat, data.lon);
    console.log(weatherData);
    console.log(data);
    setAppData({
      ...data,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon
    });
  }
  //}

  // useEffect(() => {
  //   getAppData();
  // }, []);

  const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return React.createElement(component, finalProps);
  };
  
  const PrivateRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("token") ? (
            renderMergedProps(component, props, rest)
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    );
  };
  
  
  
    return (
        <div className="App">
          <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
                    <PrivateRoute
                      exact
                      
                      path={`/surfspot`}
                      component={SurfSpotPage}
                     
                    />
            
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
        </div>
    );
  };
  // make an AJAX request to 3rd API
  // set state to API data 
/*
  return ( <
    div className = 'App' >
    /*
    <
    Map lat = {
      appData.lat
    }
    lng = {
      appData.lon
    }
    /> <
    header className = 'App-header' > {
      appData.temp &&
      <
      div > {
        appData.temp
      } & deg; < /div>
    }
    SURF SPOT {
      appData.icon &&
        <
        img
      src = {
        `https://api.worldweatheronline.com/img/w/${appData.icon}.png`
      }
      alt = 'Current Conditions' /
        >
    } <
    /header> <
    /div>
  



  <
    div className = "App" >
    <
    Header handleLout = {
      handleLogout
    }
    user = {
      userState.user
    }
    /> <
    main >
    <
    Switch >
    <
    Route exact path = '/states/:state'
    render = {
      props =>
      <
      StatesPage
      surfSessions = {
        surfSessions
      }
      user = {
        userState.user
      }
      handleLogout = {
        handleLogout
      }
      />
    }
    /> <
    Route exact path = "/"
    render = {
      props =>
      <
      HomePage / >
    }
    /> <
    Route exact path = "/signup"
    render = {
      props =>
      <
      SignupPage {
        ...props
      }
      handleSignupOrLogin = {
        handleSignupOrLogin
      }
      />
    }
    /> <
    Route exact path = "/dashboard"
    rener = {
      props =>
      useState.user ?
      <
      DashboardPage / >
      :
        <
        Redirect to = "/login" / >
    }
    /> <
    Route exact path = "/login"
    render = {
      props =>
      <
      LoginPage {
        ...props
      }
      handleSignupOrLogin = {
        handleSignupOrLogin
      }
      />
    }
    /> <
    /Switch> <
    /main> <
    Footer / >
    

    
    <
    /div>

  )

  */
  

 export default (App);

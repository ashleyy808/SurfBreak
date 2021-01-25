
import React, { useEffect,useState } from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';
import { getUser,logout } from './services/userService';
import NavBar from './components/Navbar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import SurfSpotPage from './pages/SurfSpotPage/SurfSpotPage';
import Footer from './components/Footer/index';

// import { getCurWeatherByLatLon } from './services/world-weather-api';



function App(props) {
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
          {localStorage.getItem('token') ?
            <Route exact path="/" component={SurfSpotPage}/>
            : <Route exact path="/" component={HomePage} />
          }
            <Redirect from="*" to="/" />

          </Switch>
        </BrowserRouter>
        <footer>
        <Footer />
      </footer>
        </div>
    );
  };
 export default (App);

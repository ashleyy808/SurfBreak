
import React, { useEffect,useState } from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';
import { getUser,logout } from './services/userService';
import NavBar from './components/Navbar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import SurfSpotPage from './pages/SurfSpotPage/SurfSpotPage';

import { getCurWeatherByLatLon } from './services/world-weather-api';



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

  // Calling API Data
  const [weatherData, setWeatherData] = useState({
      lat: null,
      lon: null,
  });
  const [tempData, setTempData] = useState({
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
  
  async function getAppData () {
  const url =
  const response = await fetch(url);
  const data = await response.json();
  setWeatherData({weather: data.data.request[0]})
  setTempData({temp: data.data.weather[0]})
  console.log(data);
}

  useEffect(() => {
    getAppData();
  }, []);

    return (
        <div className="App">
          <BrowserRouter>
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route
              exact
              path={`/`}
              component={SurfSpotPage}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
        </div>
    );
  };
 export default (App);

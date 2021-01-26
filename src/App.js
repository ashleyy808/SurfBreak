
import React from 'react';
import './App.css';
import { Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';

import NavBar from './components/Navbar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import SurfSpotPage from './pages/SurfSpotPage/SurfSpotPage';
import Footer from './components/Footer/index';
import nattu from './img/nattu.jpg';



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
          <div className="background-image">
            <img src={nattu} alt=""nattu />
          </div>
          <BrowserRouter>
          <NavBar />
          <Switch>
         
            <PrivateRoute exact path="/SurfSpotPage" component={SurfSpotPage}/>
             <Route exact path="/" component={HomePage} />
          
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

import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { LoginNav, LogoutNav } from './NavBarViews';
import { login } from '../../services/userService'; 
import { signup } from '../../services/userService' 
//import './LoginPage.css';

const NavBar = (props) => {


  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  });
  

  
    const [registerState, setRegisterState] = useState({
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    });
  
  
  
    async function handleRegister (e) {
      e.preventDefault();
      try {
        console.log('testing');
        await signup(registerState);
        // Let <App> know a user has signed up!
        props.handleSignuporLogin();
        props.history.push('/');
      } catch (err) {
        props.updateMessage(err.message);
      }
    }
  
    function isFormInvalid() {
      return !(registerState.name && registerState.email && registerState.password === registerState.passwordConf);
    }
  
  const handleLoginChange =(e) => {
    setLoginState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value || ''
      }))
  }

  function handleRegisterChange(e) {
    setRegisterState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await  login(loginState);
      props.handleSignuporLogin();
      props.history.push('/');

    } catch (err) {
      // Use a modal or toast in your apps instead of alert
	    alert('Invalid Credentials!');
    }
  }

    return(
      <>
      {localStorage.getItem('token')? 
      (<LoginNav/>) 

      :
      (<LogoutNav 
        handleLoginChange = {handleLoginChange}
        handleRegisterChange = {handleRegisterChange}
        handleLogin = {handleLogin}
        handleRegister = {handleRegister}
      />)
     } 
      </>
    );
} 
export default NavBar;


import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import './NavBar.css';
import { LoginNav, LogoutNav } from './NavBarViews';
import { login, logout } from '../../services/userService'; 
import { signup } from '../../services/userService' 


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
  
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

    async function handleRegister (e) {
      e.preventDefault();
      try {
        console.log(registerState);
        await signup(registerState);
        handleClose()
        // Let <App> know a user has signed up!
        // props.handleorLogin();
        props.history.push('/');
      } catch (err) {
        console.log(err);
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
    console.log(loginState)
    try {
      await  login(loginState);
      handleCloseLogin()
      props.history.push('/SurfSpotPage');

    } catch (err) {
      // Use a modal or toast in your apps instead of alert
	    alert('Invalid Credentials!');
    }
  }

  function handleLogout() {
    logout()
    props.history.push('/');
  }

    return(
      <>
      {localStorage.getItem('token')? 
      (<LoginNav
      handleLogout = {handleLogout}
      />)
     
      :(<LogoutNav 
        handleLoginChange = {handleLoginChange}
        handleRegisterChange = {handleRegisterChange}
        handleLogin = {handleLogin}
        handleRegister = {handleRegister}
        loginFormState = {loginState}
        handleClose = {handleClose}
        handleClickOpen = {handleClickOpen}
        handleOpenLogin = {handleOpenLogin}
        handleCloseLogin = {handleCloseLogin}
        open = { open }
        openLogin = {openLogin}
      />)}
      
      </>
    );
} 
export default withRouter (NavBar);


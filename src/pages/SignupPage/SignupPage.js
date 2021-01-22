import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

function SignupPage(props){

  const [messageState, setMessageState] = useState({
    msg: ''
  });

  function updateMessage(msg) {
    setMessageState({message: msg});
  }

    return (
      <div className='SignupPage'>
        <SignupForm {...props} updateMessage={updateMessage} />
        <p>{messageState.msg}</p>
      </div>
    );
}

export default SignupPage;


/*
function SignupPage(props) {
      const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    return (
      <div>
        <form>
          <input 
          value={formState.firstName} 
          onChange 
          name="firstName" 
          type="text" 
          />
          <input 
          value={formState.lastName} 
          onChange 
          name="lastName" 
          type="text" 
          />
          <input 
          value={formState.email} 
          onChange 
          name="email" 
          type="email" 
          />
          <input 
          value={formState.password} 
          onChange 
          name="password" 
          type="password" 
          />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
*/
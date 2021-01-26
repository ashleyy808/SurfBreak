import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
  
const LoginPage=({handleChange, handleSubmit, handleLoginState}) => {
  return (
    <div className="LoginPage">
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={handleSubmit}> 
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={handleLoginState}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={handleLoginState}
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
      <Button type='submit' color="secondary">
            Login
          </Button>
                </form>

    </div>
  );
}

export default LoginPage;

import { useState } from 'react';
import { Link } from 'react-router-dom';


  
const LoginPage=({handleChange, handleSubmit}) => {
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
              // value={formState.email}
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
              // value={formState.password}
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

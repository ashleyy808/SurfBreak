import Button from '@material-ui/core/Button';
import logo from '../../img/lacie-slezak-7yqyQQXgOT8-unsplash.jpg';
import './SignupForm.module.css';


const SignupForm =({handleRegister,handleChange}) => {

    return (
      <div>
        <header className="header-footer">Have a Surf Break</header>
        <img id="container" src={logo} width="175" height="100"/>
        <br></br>
        <form className="form-horizontal" onSubmit={handleRegister} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name"  name="name" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password"  name="password" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password"  name="passwordConf" onChange={handleChange} />
            </div>
          </div>
          <Button type='submit' color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
}

  

export default SignupForm;


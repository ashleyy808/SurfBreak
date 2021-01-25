import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignupForm from '../SignupForm/SignupForm'; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export const LogoutNav = ({handleLogin,handleRegister,handleLoginChange,handleRegisterChange}) => {
 
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title:{
      flexGrow: 1
    },
    margin: {
      margin: theme.spacing(2),
    },
  }));

  
  
    const classes = useStyles();
     const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
    <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h2" noWrap className={classes.title}>
            Surf Break
          </Typography>

      <Button variant="contained" size="large" onClick={handleClickOpen}>
        Login 
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
         <LoginPage handleChange={handleLoginChange} handleLogin={handleLogin}/>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <Button type='submit' color="secondary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained"  size="large" className={classes.margin} onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
         <SignupForm handleChange={handleRegisterChange} handleRegister={handleRegister}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button type='submit' color="primary">
            Register
          </Button> */}
        </DialogActions>
      </Dialog>
      </Toolbar>
          </AppBar>
    </div>
  );
}

export const LoginNav = () => {
       
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',

      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
    }));
    
      const classes = useStyles();
    
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Surf Break
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
    


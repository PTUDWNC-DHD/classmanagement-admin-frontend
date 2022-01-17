import React, { useContext, useState} from "react";


import AuthContext from '../../contexts/authContext'
import { saveToLocalStorage } from '../../utils/localStorage'
import { fetchLogin } from '../../services/authService'
import * as Notifications from '../../utils/notifications'
import * as Constant from '../../utils/constant'

import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Paper, Link, Grid, Box, Container, Typography } from "@mui/material";
import Swal from 'sweetalert2';



const LoginForm = () => {
  const { setCurrentUser } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  //function fetch to get login checking from server
  const callLoginAPI = async (usernameToFetch, passwordToFetch) => {
    const result = await fetchLogin(usernameToFetch, passwordToFetch)
    //console.log('result after fetch: ', result)
    let alert = {
      title: "Good job !",
      text:  Notifications.LOGIN_SUCCESS,
      icon: "success",
      button: "Next",
    } 
    
    if (result.data){
      setCurrentUser(result.data)
      //console.log('curr: ', result.data)
      saveToLocalStorage(result.data, Constant.LOCAL_STORAGE_USER)
    }
    else if (result.error) {
      alert = {
        title: "Login failed !",
        text: result.error,
        icon: "error",
        button: "Close",
      }
    }
    Swal.fire(alert)
  }

  const handleLogin = (event, loginType) => {    
    //switch two type of login
    switch (loginType) {
      case 'account': default:
        event.preventDefault();
        callLoginAPI(username, password)
        break;
    }
    
  }

 

  return (    
    <Container maxWidth="70%" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={(e) => {handleLogin(e, 'account')}} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={(e)=>{setUsername(e.target.value)}}
                  autoFocus
                  color="success"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  autoComplete="current-password"
                  color="success"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="success"
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginForm;

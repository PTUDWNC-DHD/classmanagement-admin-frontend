import { useState, useContext, useEffect } from 'react';

import { useParams } from "react-router-dom"
import { Link,  Container, Box,  Card, CardContent, CardHeader, Divider, Grid, TextField, Avatar, Typography } from '@mui/material';

import { fetchGetAdmin } from '../../services/adminService';

import AuthContext from '../../contexts/authContext'





const Admin = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const params = useParams();
  const id= params?.id
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const callFetchAdmins = async(token,id) => {
    setIsLoading(true);
    const result = await fetchGetAdmin(token,id);
    console.log(result);
    if (result.data) {
      setAdmins(result.data)
    }
    else if (result.error) {
      setErrorMessage(result.error)
    }
    setIsLoading(false);
  }
  useEffect(() => {
    callFetchAdmins(currentUser.token, id)
  }, [])
    
    
  
  
  return (
    <Container>
      <Card>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3} >
          <Grid item md={6} xs={12} >
            <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Full Name:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="name"
                  value={admins.name}
                />
            </Grid>
            <Grid item md={6} xs={12} >
            <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Email:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="email"
                  value={admins.email}
                />
            </Grid>
                <Grid item md={6} xs={12} >
                <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Role:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="role"
                  value={admins.role}
                />
            </Grid>
            <Grid item md={6} xs={12} >
            <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Username:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="username"
                  value={admins.username}
                />
            </Grid>
            <Grid item md={6} xs={12} >
            <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Create Time:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="createAt"
                  value={admins.createdAt}
                />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Link href={`/`}>
            <button className="userListEdit">Back</button>
          </Link>
        </Box>
      </Card>
    </Container>
  );
};

export default Admin;

import { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

import { useParams } from "react-router-dom"
import { Link,  Container, Box,  Card, CardContent, CardHeader, Divider, Grid, TextField,  Typography } from '@mui/material';

import { fetchGetUser, fetchPatchUser } from '../../services/userService';

import AuthContext from '../../contexts/authContext'






const User = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const params = useParams();
  const id= params?.id
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const callFetchUsers = async(token,id) => {
    setIsLoading(true);
    const result = await fetchGetUser(token,id);
    console.log(result);
    if (result.data) {
      setUsers(result.data)
    }
    else if (result.error) {
      setErrorMessage(result.error)
    }
    setIsLoading(false);
  }
  useEffect(() => {
    callFetchUsers(currentUser.token, id)
  }, [])
    
  const HandleChangeStudentId=(value)=> {
    setUsers({...users,studentId:value}
    )
  }
  const SaveClick= async()=>{
    const result = await fetchPatchUser(currentUser.token,id,{studentId:users.studentId})
    console.log(result)
    if (result.data) {
      Swal.fire({
        title: "Success",
        text: "Change StudentId success",
        icon: "success",
        button: "Close",
      });
    }
    if (result.error) {
      Swal.fire({
        title: "Error",
        text: "Change StudentId failed",
        icon: "error",
        button: "Close",
      });
    }
  } 
  
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
                  name="email"
                  value={users.name}
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
                  value={users.email}
                />
            </Grid>
                <Grid item md={6} xs={12} >
                <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Student Id:</Typography>
                </Box>
              <TextField
                  onChange={(e)=>HandleChangeStudentId(e.target.value)}
                  required
                  fullWidth
                  name="studentId"
                  value={users.studentId}
                />
            </Grid>
            <Grid item md={6} xs={12} >
            <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Contact:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="contact"
                  value={users.contact}
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
                  value={users.createdAt}
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
          <Link href={`/users`}>
            <button className="userListEdit">Back</button>
          </Link>
          <button onClick={SaveClick} color="primary" className="userListEdit">Save</button>
        </Box>
      </Card>
    </Container>
  );
};

export default User;
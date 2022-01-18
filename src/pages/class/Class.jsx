
import { useState, useContext, useEffect } from 'react';

import { useParams } from "react-router-dom"
import { Link, Checkbox, Container, Box, Card, CardContent, CardHeader, Divider, Grid, TextField, Avatar, Typography } from '@mui/material';

import { fetchGetClass } from '../../services/classService';

import AuthContext from '../../contexts/authContext'





const Class = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const params = useParams();
  const id= params?.id
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const callFetchClasses = async(token,id) => {
    setIsLoading(true);
    const result = await fetchGetClass(token,id);
    console.log(result);
    if (result.data) {
      setClasses(result.data)
    }
    else if (result.error) {
      setErrorMessage(result.error)
    }
    setIsLoading(false);
  }
  useEffect(() => {
    callFetchClasses(currentUser.token, id)
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
                  <Typography sx={{ mr: 12}}>Name:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="name"
                  value={classes.name}
                />
            </Grid>
            <Grid item md={6} xs={12} >
            <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Invite:</Typography>
                </Box>
              <TextField
                  disabled
                  required
                  fullWidth
                  name="invite"
                  value={classes.invite}
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
                  name="studentId"
                  value={classes.createdAt}
                />
            </Grid>
            <Grid item md={6} xs={12} >
                <Box sx={{ display: 'flex'}}>
                  <Typography sx={{ mr: 12}}>Ended:</Typography>
                  <Checkbox checked={classes.isEnded}/>
                </Box>
              
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
          <Link href={`/classes`}>
            <button className="classListEdit">Back</button>
          </Link>
        </Box>
      </Card>
    </Container>
  );
};

export default Class;
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import logo from '../logo.svg';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    
    const [name, currentName]=useState("");
    const [password, currentpassword]=useState("");
    
    const navigation = useNavigate();
    const Movedata = ()=>{
navigation('/View',{
    state: {
      name:name,
      pass:password,


    }
})


    }
    return(
<Box sx={{backgroundColor:"primary.main"}}>


<Box severity="success"  sx={{
    
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          mt:5,
          width: 400,
          height:400,
        },
       justifyContent:"center"
      }}>
    <Paper elevation={3} sx={{
        textAlign:'center'
    }}> 
    <Typography variant="p" component="h1" >
    LOGIN
            </Typography>
            <Box sx={{position:"relative" ,
left:"145px",top:"-35px"}}>
<Button  variant="contained" color="success" onClick={()=>{
        navigation('/')
    }}>Sign Up</Button>
</Box>
    <Box       component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '26ch' },
      }}
      noValidate
      autoComplete="off">
<Box sx={{py:2 ,px:10}}>

    <TextField  id="standard-basic" label="Email" variant="standard" onChange={e =>currentName(e.target.value)}/>
</Box>
<Box sx={{py:2,px:10}}>

    <TextField 
    variant="standard"
    id="outlined-password-input"
    label="Password"
    type="password"
          autoComplete="current-password"
          onChange={e =>currentpassword(e.target.value)}     />
          </Box>
    </Box>
    <Box>
        
    <Button variant="outlined" sx={{my:5}} onClick={Movedata}>Start the quiz</Button>
    </Box>
    </Paper>
</Box>
    </Box>
    )
}

export default Login
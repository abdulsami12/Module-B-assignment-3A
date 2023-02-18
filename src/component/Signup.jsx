import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Signup(){

    const [name, currentName]=useState("");
    const [Lastname, currentlastName]=useState("");
   
    const [password, currentpassword]=useState("");
    let completeName = name + " "+ Lastname; 
    const navigation = useNavigate();
    const Movedata = ()=>{
navigation('/View',{
    state: {
      name:completeName,
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
          height:500,
        },
       justifyContent:"center"
      }}>
    <Paper elevation={3} sx={{
        textAlign:'center'
    }}> 
    <Typography variant="p" component="h1" >
    SIGN UP
            </Typography>
<Box sx={{position:"relative" ,
left:"145px",top:"-35px"}}>
<Button  variant="contained" color="success" onClick={()=>{
        navigation('./Login')
    }}>Login</Button>
</Box>
    <Box       component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '26ch' },
      }}
      noValidate
      autoComplete="off">
<Box sx={{display:'flex' , }}>
<Box sx={{pl:7 ,        '& > :not(style)': { m: 1, width: '10ch' },}}>

<TextField  id="standard-basic" label="Fist Name" variant="standard" onChange={e =>currentName(e.target.value)}/>
</Box>
<Box sx={{pl:3 ,        '& > :not(style)': { m: 1, width: '10ch' },}}>

<TextField  id="standard-basic" label="Last Name" variant="standard"  onChange={e =>currentlastName(e.target.value)}/>
</Box>
</Box>
<Box sx={{py:2 ,px:7 ,        '& > :not(style)': { m: 1, width: '26ch' },}}>

    <TextField  id="standard-basic" label="Email" variant="standard" />
</Box>
<Box sx={{py:2,px:7,        '& > :not(style)': { m: 1, width: '26ch' },}}>

    <TextField 
    variant="standard"
    id="outlined-password-input"
    label="Password"
    type="password"
          autoComplete="current-password"
          onChange={e =>currentpassword(e.target.value)} />
          </Box>
    </Box>
    <Box>
    <Button variant="outlined" sx={{my:5}} onClick={Movedata}>Start the quiz</Button>
    </Box>
    </Paper>
</Box>
    </Box>
    );
}
export default Signup
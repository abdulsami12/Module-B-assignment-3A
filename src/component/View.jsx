import { Box, Button, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function View(){
    const location = useLocation()
    console.log(location)
    const navigation = useNavigate();
    return (
<Box>

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
    <Box>

<Typography variant="p" component="h1" >
    Name : {location.state.name}
</Typography>

    </Box>
<Box>

<Typography variant="p" component="h2" >
    Password : {location.state.pass}
</Typography>
</Box>

<Box>

<Button variant="outlined" sx={{my:5}}>Login</Button>
</Box>
</Paper>
</Box>
</Box>

    )
}


export default View
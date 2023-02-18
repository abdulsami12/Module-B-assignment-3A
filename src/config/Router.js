import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Signup from "../component/Signup";
import View from "../component/View";

const { Box } = require("@mui/material");

function Router(){

return(

    <Box>
<BrowserRouter>
<Routes>
    <Route path="Login"   element={<Login/>} />
    <Route path="/"   element={<Signup/>} />
    <Route path="View"   element={< View/>} />
    

</Routes>
</BrowserRouter>
    </Box>
)

}

export default Router;
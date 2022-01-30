import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


const PublicOutlet = () =>{
    const {currentUser} = useAuth()
        return !currentUser ? <Outlet/> :  <Navigate to="/" />
}

export default PublicOutlet;



// this code is not working in app.js
{/* <Route path="/*" element={<PublicOutlet />}>
              <Route exact path="" element={<Home />} />
              <Route exact path="signup" element={<SignUp />} />
              <Route exact path="login" element={<Login />} />
            </Route> */}
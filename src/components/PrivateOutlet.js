import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateOutlet = () =>{
    const {currentUser} = useAuth()
        return currentUser ? <Outlet/> :  <Navigate to="/login" />
}

export default PrivateOutlet;



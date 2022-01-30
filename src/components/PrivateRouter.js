import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const PrivateRouter = ({ children}) =>{
    const {currentUser} = useAuth();
       
    return currentUser ? children : <Navigate to="/login" />
}






 
 
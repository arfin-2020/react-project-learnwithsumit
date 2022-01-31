import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const PublicRouter = ({ children}) =>{
    const {currentUser} = useAuth();
       
    return !currentUser ? children : <Navigate to="/" />
}
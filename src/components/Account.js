import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import classes from "./style/Account.module.css";
const Account = () => {
  const { currentUser, logOut } = useAuth();
  // console.log('currentUser----',currentUser.displayName);
  return (
    <div className={classes.account}>
    {currentUser ? (
      <>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <span>{currentUser.displayName}</span>
        <span
          className="material-icons-outlined"
          title="Logout"
          onClick={logOut}
        >
          {" "}
          logout{" "}
        </span>
      </>
    ) : (
      <>
        <Link to="/signup">Signup</Link>
        <Link to="/login" >Login</Link>
      </>
    )}
  </div>
  );
};

export default Account;

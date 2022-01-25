import Login from '../assets/images/login.svg';
import classes from './style/illustration.module.css';
const IllustrationLogin = () =>{
    return(
        <div className={classes.illustration}>
            <img src={Login} alt="Login" />
        </div>
    )
}

export default IllustrationLogin;
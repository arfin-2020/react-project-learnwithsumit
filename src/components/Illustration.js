import SignUp from '../assets/images/signup.svg';
import classes from './style/illustration.module.css';
const Illustration = () =>{
    return(
        <div className={classes.illustration}>
            <img src={SignUp} alt="Signup" />
        </div>
    )
}

export default Illustration;
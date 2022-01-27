import IllustrationLogin from '../../components/IllustrationLogin';
import LoginForm from '../../components/LoginForm';
import classes from '../style/Login.module.css';
const Login = () =>{
    return(
        <div className={classes.main}>
        <div className={classes.container}>
        <h1>Login to your account</h1>
          <div className="column">
          <IllustrationLogin />
            <LoginForm/>
          </div>
        </div>
      </div>
    )
}

export default Login;
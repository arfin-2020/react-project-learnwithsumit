import LoginForm from '../LoginForm';
import classes from '../style/Login.module.css';
const Login = () =>{
    return(
        <main className={classes.main}>
        <div className={classes.container}>
        <h1>Login to your account</h1>
          <div className="column">
          {/* <IllustrationLogin /> */}
            <LoginForm/>
          </div>
        </div>
      </main>
    )
}

export default Login;
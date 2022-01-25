import IllustrationLogin from "../IllustrationLogin";
import LoginForm from '../LoginForm';

const Login = () =>{
    return(
        <main className="main">
        <div className="container">
        <h1>Login to your account</h1>
          <div className="column">
          <IllustrationLogin />
            <LoginForm/>
          </div>
        </div>
      </main>
    )
}

export default Login;
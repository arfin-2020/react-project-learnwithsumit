import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Button from "./Button";
import Form from "./Form";
import classes from "./style/Login.module.css";
import TextInput from "./TextInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const { logIn } = useAuth();
  const history = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setError("");
      setLoading(true);
      await logIn(email, password);
      history("/",{replace:true})
    }catch(err){
      console.log(err);
      setLoading(false);
      setError("Failded to login!");
    }

  }

  return (
    <Form className={`${classes.login}`} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        onChange={e => setPassword(e.target.value)}
        required
      />

      <Button type="submit" disabled={loading} onClick={handleSubmit}>
        <span>Login</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};
export default LoginForm;

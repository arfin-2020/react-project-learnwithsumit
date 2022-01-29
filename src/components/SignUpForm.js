import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import classes from "./style/SignUp.module.css";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isAgree, setisAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { signUp } = useAuth();
  const history = useNavigate()

console.log('siup',{signUp})

  const handleSubmit = async e => {
    console.log('click me');
    e.preventDefault();

    if (!password !== confirmPassword) {
      return setError("dont's match password");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password, username);
      history.push("/");
    } catch (err) {
        console.log(err);
        setLoading(false);
        setError("failded to create an account!");
    }
    
  };
  return (
 
      <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter Name"
          icon="person"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
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
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <TextInput
          type="password"
          placeholder="Enter Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={e => setconfirmPassword(e.target.value)}
          required
        />
        <Checkbox
          text=" I agree to the Terms &amp; condition"
          value={isAgree}
          onChange={e => setisAgree(e.target.value)}
        />
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
      <Button type="submit" disabled={loading}>
        <span>Submit now</span>
      </Button>
      </Form>
      
   
  );
};

export default SignUpForm;

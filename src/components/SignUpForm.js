import { useState } from "react";
import { Link } from "react-router-dom";
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

  const { signUp } = useAuth();
  return (
    <>
      <Form className={`${classes.signup}`}>
        <TextInput
          type="text"
          placeholder="Enter Name"
          icon="person"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Enter Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={e => setconfirmPassword(e.target.value)}
        />
        <Checkbox
          text=" I agree to the Terms &amp; condition"
          value={isAgree}
          onChange={e => setisAgree(e.target.value)}
        />
      </Form>
      <Button>
        <span>Submit now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </>
  );
};

export default SignUpForm;

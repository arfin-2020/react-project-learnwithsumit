import { Link } from "react-router-dom";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../style/SignUp.module.css";
import TextInput from "../TextInput";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Enter Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; condition" />
        </Form>
        <Button><span>Submit now</span></Button>
        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </div>
    </>
  );
};
export default SignUp;
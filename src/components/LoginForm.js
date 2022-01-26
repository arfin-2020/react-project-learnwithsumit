import { Link } from 'react-router-dom';
import Button from "./Button";
import Form from "./Form";
import classes from "./style/Login.module copy.css";
import TextInput from "./TextInput";
const LoginForm = () => {
  return (
    <>
      <Form className={`${classes.login}`}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
        />

        <TextInput type="password" placeholder="Enter password" icon="lock" />

        <Button>Submit now</Button>
        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
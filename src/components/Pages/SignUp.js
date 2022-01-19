import Form from "../Form";
import Illustration from "../Illustration";
import classes from '../style/SignUp.module.css';
import TextInput from "../TextInput";
const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup}`}>
                    <TextInput type='text'
                        placeholder='Enter Name'
                        icon='person'
                    />
                    <TextInput type='text'
                        placeholder='Enter email'
                        icon='alternate_email'
                    />
                    <TextInput type='password'
                        placeholder='Enter password'
                        icon='lock'
                    />
                    <TextInput type='password'
                        placeholder='Enter Confirm password'
                        icon='lock_clock'
                    />
                </Form>
            </div>
        </>
    )
}
import classes from './style/Form.module.css';
const Form = ({children, className, ...rest}) =>{
    return(
        <Form className={`${className} ${classes.form}`} action='#' {...rest}>
            {children}
        </Form>
    )
}

export default Form;
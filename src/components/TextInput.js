import classes from './style/TextInput.module.css';
const TextInput = ({...props, icon}) => {
    return (
        <div className={classes.textInput}>
            <input {...props} />
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    )
}
export default TextInput;
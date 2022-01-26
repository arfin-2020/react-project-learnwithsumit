import Checkbox from "./Checkbox";
import classes from './style/Answers.module.css';
const Answers = () =>{
    return(
        <div className={classes.answers}>
            <Checkbox text="Text Answers" className={classes.answer}/>
        </div>
    )
}

export default Answers;
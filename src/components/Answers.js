import Checkbox from "./Checkbox";
import classes from './style/Answers.module.css';
const Answers = ({ options = [], handleChange }) => {
    return (
        <div className={classes.answers}>
            {
                options.map((option, index) =>
                    <Checkbox
                        key={index}
                        text={option.title}
                        value={index}
                        className={classes.answer}
                        checked={option.checked}
                        onChange={(e)=>handleChange(e,index)}
                    />
                )
            }
        </div>
    )
}

export default Answers;
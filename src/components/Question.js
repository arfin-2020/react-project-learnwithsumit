import Answers from "./Answers";
import classes from './style/Analysis.module.css';
const Question = () =>{
    return(
        <div className={classes.question}>
            <div className={classes.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <Answers/>
          </div>
    )
}

export default Question;
import { Fragment } from "react";
import Checkbox from "./Checkbox";
import classes from "./style/Answers.module.css";
const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              text={option.title}
              value={index}
              className={classes.answer}
              checked={option.checked}
              onChange={e => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`${classes.answer} ${
                option.correnct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;

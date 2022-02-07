import Button from "./Button";
import classes from "./style/ProgressBar.module.css";

const ProgressBar = ({ next, prev, progress, submit }) => {
  return (
    <div className={classes.progressBar}>
      <Button className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </Button>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};
export default ProgressBar;

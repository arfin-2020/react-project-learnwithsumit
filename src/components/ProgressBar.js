import { useRef, useState } from "react";
import Button from "./Button";
import classes from "./style/ProgressBar.module.css";

const ProgressBar = ({ next, prev, progress, submit }) => {
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(false);

  const toggleTooTip = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  };
  return (
    <div className={classes.progressBar}>
      <Button className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </Button>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progress} % Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooTip}
            onMouseOut={toggleTooTip}
          ></div>
        </div>
      </div>

      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};
export default ProgressBar;

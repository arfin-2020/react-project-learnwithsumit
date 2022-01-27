import Button from './Button';
import classes from './style/ProgressBar.module.css'
const ProgressBar = () =>{
    return (
        <div className={classes.progressBar}>
          <div className={classes.backButton}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div classNameName={classes.rangeArea}>
            <div className={classes.tooltip}>24% Cimplete!</div>
            <div className={classes.rangeBody}>
              <div className={classes.progress} style={{width: "20%"}}></div>
            </div>
          </div>
          <a href="result.html">
            <Button className={classes.button}>
              <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
          </a>
        </div>
    )
}
export default ProgressBar;
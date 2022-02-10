import Image from '../assets/images/success.png';
import classes from './style/Summary.module.css';
const Summary = ({score,noq})=>{
  console.log('score------', score, noq);
    return(
        <div className={classes.summary}>
          <div className={classes.point}>
            <p className={classes.score}>
              Your score is <br />
              {score} out of {noq}
            </p>
          </div>

          <div className={classes.badge}>
            <img src={Image} alt="Success" />
          </div>
        </div>
    )
}

export default Summary;
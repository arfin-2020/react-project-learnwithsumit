import classes from './style/Video.module.css';
import image from '../assets/images/3.jpg';
const Video = () =>{
    return(
        <div>
            <a href="quiz.html"
            ><div className={classes.video}>
              <img src={image} alt="Video" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
        </div>
    )
}

export default Video;
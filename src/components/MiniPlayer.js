import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "./style/MiniPlayer.module.css";
const MiniPlayer = ({ id, videoTitle }) => {
  const ButtonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  const toggoleMiniPlayer = () => {
    if (!status) {
      ButtonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      ButtonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  };
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={ButtonRef}
      onClick={toggoleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggoleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer className={`${classes.videoPlayer}`}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
        // light
      />
      <p>{videoTitle}</p>
    </div>
  );
};

export default MiniPlayer;

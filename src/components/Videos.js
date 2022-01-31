import { Link } from "react-router-dom";
import UseVideoList from "../hooks/UseVideoList";
import classes from "./style/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  const { loading, error, videos } = UseVideoList(0);
  console.log(loading, error, videos);
  return (
    <div className={classes.videos}>
      {/* <Link to="/quiz"><Video/></Link>    */}

      {videos.length > 0 &&
        videos.map((video) => 
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        
        )}

        {!loading && videos.length === 0 &&(<h1>No data Found</h1>)}
        {error && (<h1>{error}</h1>)}
        {loading && <p>loadding.......</p>}
    </div>
  );
};

export default Videos;

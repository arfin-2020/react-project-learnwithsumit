import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import UseVideoList from "../hooks/UseVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasmore } = UseVideoList(page);
  // console.log(loading, error, videos);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={e => setPage(page + 8)}
          hasMore={hasmore}
          loader={<h4>Still loading Man! please wait</h4>}
        >
          {videos.map(video =>
            video.noq > 0 ? (
              <Link
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                  // state: {
                  //   videoTitle: video.title,
                  // },
                }}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <h1>No data Found</h1>}
      {error && <h1>{error}</h1>}
      {loading && <p>loadding.......</p>}
    </div>
  );
};

export default Videos;

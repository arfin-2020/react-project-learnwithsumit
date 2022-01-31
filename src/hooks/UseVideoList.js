import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";

const UseVideoList = (page) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideo = async () => {
      //database related work
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey(), startAt("" + page), limitToFirst(10));
      try {
        setLoading(true);
        setError(false);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        // console.log("Snapshot---------", snapshot.val());
        if (snapshot.exists()) {
          setVideos(preVideos => {
            return [...preVideos, ...Object.values(snapshot.val())];
          });
        // setVideos(snapshot.val())
        } else {
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Fetching failed!");
      }
    };
    fetchVideo();
  }, [page]);
  return {
      loading,
      error,
      videos
  }
};

export default UseVideoList;

import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const UseAnswersList = videoId => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      //database related work
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + `${videoId}/` + "questions");
      const answerQuery = query(answerRef, orderByKey())
      try {
        setLoading(true);
        setError(false);
        // request firebase database
        const snapshot = await get(answerQuery);
        setLoading(false);
        // console.log("Snapshot---------", snapshot.val());
        if (snapshot.exists()) {
          setAnswers(preAnswers => {
            return [...preAnswers, ...Object.values(snapshot.val())];
          });
          // setVideos(snapshot.val())
        } 
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Fetching failed!");
      }
    };
    setTimeout(() => {
      fetchAnswers();
    }, 1500);
  }, [videoId]);
  return {
    loading,
    error,
    answers,
  
  };
};

export default UseAnswersList;

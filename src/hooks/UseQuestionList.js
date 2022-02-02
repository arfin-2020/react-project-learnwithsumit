import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const UseQuestionList = videoId => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      //database related work
      const db = getDatabase();
      const questionsRef = ref(db, "quiz/" + "videoId/" + "questions");
      const questionQuery = query(questionsRef, orderByKey())
      try {
        setLoading(true);
        setError(false);
        // request firebase database
        const snapshot = await get(questionQuery);
        setLoading(false);
        // console.log("Snapshot---------", snapshot.val());
        if (snapshot.exists()) {
          setQuestions(preQuestions => {
            return [...preQuestions, ...Object.values(snapshot.val())];
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
      fetchQuestions();
    }, 1500);
  }, [videoId]);
  return {
    loading,
    error,
    questions,
  
  };
};

export default UseQuestionList;

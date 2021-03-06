import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import UseQuestionList from "../../hooks/UseQuestionList";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = "0";

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach(question => {
        // console.log('Al questions from firebase----------', action.value)
        question.options.forEach(option => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      //This question is not come from firebase it's just a copy questions current state;
      const questions = _.cloneDeep(state);
      // console.log('Al questions from current state ----------', questions);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { questions, loading, error } = UseQuestionList(id);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const getState = useLocation();
  const { state } = getState;
  const  {videoTitle}  = state;
//   console.log("state", videoTitle);
  
  // console.log('Question hai-------', questions);
  // console.log('currentQuestion-------', currentQuestion);

  const [qna, dispatch] = useReducer(reducer, initialState);
//   console.log("QNA----------", qna);
  const { currentUser } = useAuth();
  // console.log('current User', currentUser)

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle when user click the next button to get the next question

  function nexQuestion() {
    // console.log("he clicked me");
    if (currentQuestion + 1 < questions.length) {
      setcurrentQuestion(prevCurrent => prevCurrent + 1);
    }
  }
  // handle when user click the back button to get the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setcurrentQuestion(prevCurrent => prevCurrent - 1);
    }
  }

  // submit function

  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    // console.log("QNA----submission-------", qna);

    // navigate("/users/123", { state: partialUser });
    navigate(`/result/${id}`, { state: qna });
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
     {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      
    
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nexQuestion}
            prev={prevQuestion}
            submit={submit}
            progress={percentage}
          />
          <MiniPlayer id={id} title={videoTitle} />
        </>
      )}
    </>
  );
};
export default Quiz;

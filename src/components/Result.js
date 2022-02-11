import _ from 'lodash';
import { useLocation, useParams } from "react-router-dom";
import UseAnswersList from "../hooks/UseAnswersList";
import Analysis from "./Analysis";
import Summary from "./Summary";
const Result = () => {
  const { id } = useParams();
  const location = useLocation();

  const  qna  = location.state;
  
//   console.log('qna-------location----',qna);

  const { error, loading, answers } = UseAnswersList(id);
//   console.log("answers---------", answers, loading, error);

  function calculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      
      // here I am checking array structure
      if(_.isEqual(correctIndexes, checkedIndexes)){
          score = score + 5;
      }
    });
    return score
  }
  const userScore = calculate();
  return (
    <>
      {loading && <div>loading........</div>}
      {error && <div>There was an error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length}/>
          <Analysis answers={answers}/>
        </>
      )}
    </>
  );
};

export default Result;

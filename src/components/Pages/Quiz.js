import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import UseQuestionList from "../../hooks/UseQuestionList";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import _ from 'lodash';


const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach(question => {
                console.log('Al questions from firebase----------', action.value)
                question.options.forEach(option => {
                    option.checked = false;
                })
            });
            return action.value;

        case "answer":
            //This question is not come from firebase it's just a copy questions current state;
            const questions = _.cloneDeep(state);
            console.log('Al questions from current state ----------', questions);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
            return questions;
        default:
            return state;
    }
}

const Quiz = () => {
    const { id } = useParams();
    const { loading, error, questions } = UseQuestionList(id);
    const [currentQuestion, setcurrentQuestion] = useState(0);

    console.log(questions);

    const [qna, dispatch] = useReducer(reducer, initialState);
    console.log("QNA----------", qna)
    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions
        })
    }, [questions])

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answer",
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        })
    }
    return (
        <>
            {loading && <div>loading.....</div>}
            {error && <div>There is an error!</div>}
            {!error && !loading && qna & qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <h4>Perameter {id}</h4>
                    <Answers options={qna[currentQuestion].options} handleChange={handleAnswerChange} />
                    <ProgressBar />
                    <MiniPlayer />
                </>
            )}
        </>
    )
}
export default Quiz;
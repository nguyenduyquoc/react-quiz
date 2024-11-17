import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getQuestionsByQuizId } from "../../services/QuizService";
import { useSelector } from "react-redux";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";

const DetailQuiz = () => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const param = useParams();
  const quizId = param.id;
  const [dataQuiz, setDataQuiz] = useState([]);
  const location = useLocation();
  const [currentQues, setCurrentQues] = useState(0);

  const handleClickPrevQuestionBtn = () => {
    if (currentQues !== 0) {
      setCurrentQues(currentQues - 1);
    }
  };

  const handleClickNextQuestionBtn = () => {
    if (dataQuiz && dataQuiz.length > currentQues + 1) {
      setCurrentQues(currentQues + 1);
    }
  };

  const fetchQuestions = async () => {
    if (isAuthenticated) {
      let res = await getQuestionsByQuizId(quizId);

      if (res && res.EC === 0) {
        let raw = res.DT;
        let data = _.chain(raw)
          .groupBy("id")
          .map((value, key) => {
            let questionDescription,
              image = null;
            let answers = [];

            value.forEach((item, index) => {
              if (index === 0) {
                questionDescription = item.description;
                image = item.image;
              }
              answers.push(item.answers);
            });

            return { questionId: key, questionDescription, image, answers };
          })
          .value();

        console.log(data);
        setDataQuiz(data);
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  return (
    <div className="detail-quiz-container container-fluid">
      <div className="row px-2 px-md-3 px-lg-5">
        <div className="left-content col-12 col-sm-9 col-md-9 col-lg-8">
          <div className="title">
            Quiz {quizId} : {location?.state?.quizTitle}
          </div>
          <hr />
          <div className="question-body"></div>
          <div className="question-content">
            <Question
              currentQues={currentQues}
              question={
                dataQuiz && dataQuiz.length > 0 ? dataQuiz[currentQues] : {}
              }
            />
          </div>
          <div className="footer text-center">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleClickPrevQuestionBtn()}
              disabled={currentQues === 0 ? true : false}
            >
              Prev
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => handleClickNextQuestionBtn()}
              disabled={dataQuiz.length === currentQues + 1 ? true : false}
            >
              Next
            </button>
          </div>
        </div>
        <div className="right-content col-12 col-sm-3 col-md-3 col-lg-4">
          count down
        </div>
      </div>
    </div>
  );
};

export default DetailQuiz;

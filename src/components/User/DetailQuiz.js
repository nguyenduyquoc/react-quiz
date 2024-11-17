import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByQuizId } from "../../services/QuizService";
import { useSelector } from "react-redux";
import _ from "lodash";

const DetailQuiz = () => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const param = useParams();
  const quizId = param.id;
  const [questions, setQuestions] = useState([]);

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
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  return (
    <div className="detail-quiz-container">
      <div>hehe</div>
      <div>hehe</div>
    </div>
  );
};

export default DetailQuiz;

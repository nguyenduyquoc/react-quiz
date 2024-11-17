import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByQuizId } from "../../services/QuizService";
import { useSelector } from "react-redux";

const DetailQuiz = () => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const param = useParams();
  const quizId = param.id;
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    if (isAuthenticated) {
      let res = await getQuestionsByQuizId(quizId);

      if (res && res.EC === 0) {
        setQuestions(res.DT);
        console.log(res.DT);
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

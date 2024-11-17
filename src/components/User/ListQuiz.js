import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/QuizService";
import "./ListQuiz.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListQuiz = (props) => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const [arrayQuiz, setArrayQuiz] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    if (isAuthenticated) {
      const res = await getQuizByUser();
      if (res && res.EC === 0) {
        setArrayQuiz(res.DT);
      }
    }
  };

  return (
    <div className="list-quiz-container container">
      <div className="row">
        {arrayQuiz &&
          arrayQuiz.length > 0 &&
          arrayQuiz.map((quiz, index) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4 p-4"
                key={`${index}-quiz`}
              >
                <div className="card">
                  <img
                    src={`data:image/jpeg;base64,${quiz.image}`}
                    className="card-img-top"
                    alt="quiz image"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Quiz {index + 1}</h5>
                    <p className="card-text" style={{ aspectRatio: "9 / 2" }}>
                      {quiz.description}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        navigate(`/quiz/${quiz.id}`, {
                          state: { quizTitle: quiz.description },
                        })
                      }
                    >
                      Start now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        {arrayQuiz && arrayQuiz.length === 0 && <p>No quizzes found</p>}
      </div>
    </div>
  );
};

export default ListQuiz;

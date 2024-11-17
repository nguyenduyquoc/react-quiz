import addTokenToHeaders from "../utils/addTokenToHeaders ";
import axios from "../utils/axiosCustomize";

const getQuizByUser = () => {
  return axios.get("api/v1/quiz-by-participant", {
    headers: addTokenToHeaders(),
  });
};

const getQuestionsByQuizId = (quizId) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${quizId}`, {
    headers: addTokenToHeaders(),
  });
};

export { getQuizByUser, getQuestionsByQuizId };

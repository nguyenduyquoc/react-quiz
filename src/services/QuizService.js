import addTokenToHeaders from "../utils/addTokenToHeaders ";
import axios from "../utils/axiosCustomize";

const getQuizByUser = () => {
  return axios.get("api/v1/quiz-by-participant", {
    headers: addTokenToHeaders(),
  });
};

export { getQuizByUser };

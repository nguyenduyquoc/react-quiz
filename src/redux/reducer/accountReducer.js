import { FETCH_USER_LOGIN_SUCCESS } from "../action/accountAction";

const INITIAL_STATE = {
  account_info: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
  },

  isAuthenticated: false,
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      console.log(`check action : ${action}`);

      return {
        ...state,
        account_info: {
          access_token: action?.payload?.DT?.access_token,
          refresh_token: action?.payload?.DT?.refresh_token,
          username: action?.payload?.DT?.username,
          image: action?.payload?.DT?.image,
          role: action?.payload?.DT?.role,
        },
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default accountReducer;

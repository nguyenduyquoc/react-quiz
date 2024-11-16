import { store } from "../redux/store";

const addTokenToHeaders = (headers = {}) => {
  const access_token = store?.getState()?.account?.account_info?.access_token;
  if (access_token) {
    return {
      ...headers,
      Authorization: `Bearer ${access_token}`,
    };
  }
  return headers;
};

export default addTokenToHeaders;

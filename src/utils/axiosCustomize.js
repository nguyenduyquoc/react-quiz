import axios from "axios";
import NProgress from "nprogress";

NProgress.configure({
  showSpinner: false,
});

const instance = axios.create({
  baseURL: "http://localhost:8081/",
});

export default instance;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    NProgress.start();
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // console.log(">>> interceptors response", response);
    return response && response.data ? response.data : response;
  },
  function (error) {
    NProgress.done();

    // token expired
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.EC === -999
    ) {
      window.location.href = "/login";
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(">>> run error: ", error.response);
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

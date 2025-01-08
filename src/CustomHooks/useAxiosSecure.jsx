import axios from "axios";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
export default function useAxiosSecure() {
  // request interceptor to add authorization header for every secure API
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error.response.status;
      console.log("Status error in the interceptor", status);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
}

import axios from "axios";
import { retrieveItem } from "../utils/storage";

const Api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
  
Api.interceptors.request.use(
  async (config) => {
    const token = await retrieveItem("token");
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
  

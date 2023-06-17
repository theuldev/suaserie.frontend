import axios from "axios";
import url from "../constants/variables";
import getAuth from "./authService";

const res = getAuth();



const api = axios.create({
  baseURL: url, withCredentials: true,
  headers: {
    'Authorization':`bearer ${res.acessToken}`,
  }
});
export default api;
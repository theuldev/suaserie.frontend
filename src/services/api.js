import axios from "axios";
import url from "../constants/variables";
import { getAuth } from "./authService";

const res = getAuth();
const acessToken = res.acessToken
console.log(acessToken)
const api = axios.create({
  baseURL: url, withCredentials: true,
  headers: {
    'Authorization':`bearer ${acessToken}`,
  }
});
export default api;
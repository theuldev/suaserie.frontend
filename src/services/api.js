import axios from "axios";
import url from "../constants/variables";

const api = axios.create({
  baseURL: url,
});

export default api;
import axios from "axios";
import url from "../constants/variables";
import { getAuth } from "./authService";

const acesstoken = getAuth()

console.log(`bearer ${JSON.parse(acesstoken)}`)
const api = axios.create({
  baseURL: url, withCredentials: true,
   headers: {
    'Authorization': `bearer ${JSON.parse(acesstoken) }`,
  }
 
});


export default api ;


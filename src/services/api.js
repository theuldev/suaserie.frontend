import axios from "axios";
import url from "../constants/variables";

const acesstoken = JSON.parse(localStorage.getItem('acessToken') )

console.log(`bearer ${acesstoken}`)
const api = axios.create({
  baseURL: url, withCredentials: true,
   headers: {
    'Authorization': `bearer ${acesstoken}`,
  }
 
});


export default api ;


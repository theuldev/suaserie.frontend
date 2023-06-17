import axios from "axios";
import url from "../../constants/variables";

import api from "../api";
import { useNavigate } from "react-router";
import { AiTwotoneLayout } from "react-icons/ai";


const login = async (data) => {

  console.log(data)
  const urld = '/auth/login'
  const res = await api.post(urld, data).then((response) => {
      
     localStorage.setItem('authToken',JSON.stringify(response.data))
    return JSON.parse(response);
  }).catch((error) => {
    if (error) {
      console.log('Não autorizado', error)
    }
  })
}
export default login;
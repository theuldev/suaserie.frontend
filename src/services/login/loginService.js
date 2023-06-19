import axios from "axios";
import url from "../../constants/variables";

import api from "../api";
import { useNavigate } from "react-router";
import { AiTwotoneLayout } from "react-icons/ai";
import { setAuth } from "../authService";


const login = async (data) => {

  console.log(data)
  const urld = '/auth/login'
  await api.post(urld, data).then((response) => {
    setAuth(response.data.acessToken);
    return response
  }).catch((error) => {
    if (error) {
      console.log('Não autorizado', error)
    }
  })
}
export default login;
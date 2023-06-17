import axios from "axios";
import url from "../../constants/variables";

import api from "../api";
import { useNavigate } from "react-router";


const login = (data) => {

  console.log(data)
  const urld = '/auth/login'
  api.post(urld, data).then((response) => {
    localStorage.setItem('authToken',JSON.stringify(response.data))

    console.log(response.data)
    return response;
  }).catch((error) => {
    if (error) {
      console.log('Não autorizado', error)
    }
  })
}
export default login;
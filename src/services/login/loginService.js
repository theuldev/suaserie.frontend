import axios from "axios";
import url from "../../constants/variables";

import api from "../api";

const login = (data) => {
  console.log(data)
  const urld = '/auth/login'
  api.post(urld, data).then((response) => {
    console.log(response)
  
  })
}
export default login;
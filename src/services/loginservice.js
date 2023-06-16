
import React from "react";
import axios from "axios";
import url from "../constants/variables";


const loginService = (email,password) => {
   url = url + '/auth/login'
   console.log(password,email)
}
export default loginService;
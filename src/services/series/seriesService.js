import React from "react";
import api from "../api";



const getAllSeries =  () => {

    const urld = '/series'
     api.get(urld).then((response) => {
        console.log(response)
        return response
    }).catch((error) => {
        console.log(error)
    })
}
export default getAllSeries;
import React from "react";
import api from "../api";



const getAllSeries = async () => {
    try {
        const urld = '/series'
        var res = await api.get(urld)
        const response = res.data
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}


const getSeriebyId = async(id) => {
      try {
        const urld = `/series/${id}`
        var res = await api.get(urld)
        const response = res.data
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
export {getAllSeries, getSeriebyId};
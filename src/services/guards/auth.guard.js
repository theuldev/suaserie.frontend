import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import getAuth from "../authService";


const AuthGuard = () => {
    const authToken = getAuth();
    return authToken ? <Outlet/> : <Navigate to={'/'} replace/>
}

export default AuthGuard
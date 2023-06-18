import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const AuthGuard = () => {
    const authToken = JSON.parse(localStorage.getItem('acessToken'))
    return authToken ? <Outlet /> : <Navigate to={'/'} replace />
}

export default AuthGuard
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hook/useAuth";

export default function PrivateRoute() {
    const { isLoggedIn } = useAuth();

    // useEffect(() => {
    //     console.log('private')
    // }, [])

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
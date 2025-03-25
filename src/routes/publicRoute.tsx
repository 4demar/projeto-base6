import { Navigate, Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useAuth } from "../hook/useAuth";

export default function PublicRoute() {
    const { isLoggedIn, verificarAcesso } = useAuth();

    useEffect(() => {
        verificarAcesso()
    }, [verificarAcesso])

    return isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
}
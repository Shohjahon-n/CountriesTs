import { Layout } from "./Layout/Layout"
import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/register/Register"
import PrivateRoute from "./router/PrivateRouter"
import { Home } from "./pages/home/Home"
import { Error } from "./pages/error/Error"
export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<PrivateRoute />}>
                        <Route index element={<Home />} />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}
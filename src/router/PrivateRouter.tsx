import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const auth = localStorage.getItem('auth');
    return auth === 'true' ? <Outlet /> : <Navigate to="/login" />;
}
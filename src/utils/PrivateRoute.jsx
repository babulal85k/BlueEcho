import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../Context/AuthContext';


const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext);

    return isAuth ? children : <Navigate to='../pages/Login/Login.jsx' />
}

export default PrivateRoute;
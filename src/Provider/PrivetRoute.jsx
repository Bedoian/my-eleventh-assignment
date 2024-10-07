import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {
    const{loading,user}=useAuth()

    if(loading)return 'loading...'
    if(!user)return <Navigate to='/login'></Navigate>

    return children
};

export default PrivetRoute;
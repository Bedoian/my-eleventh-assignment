import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const{loading,user}=useContext(AuthContext)

    if(loading)return 'loading...'
    if(!user)return <Navigate to='/login'></Navigate>

    return children
};

export default PrivetRoute;
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})
const useAxiosSecure = () => {
    const{logOut}=useAuth()
    const navigate=useNavigate()
    // interceptor

    // responce
    axiosSecure.interceptors.response.use(
        res=>{
            // console.log('hi kmon aso joye love you miss u',res)
            return res
        },
       async error=>{
            console.log('error occured in somewhere',error.response)
            if(error.response.status===403){
               await logOut()
                navigate('/login')

            }
            return Promise.reject(error)
        }
    )


    // request
    return axiosSecure
};

export default useAxiosSecure;
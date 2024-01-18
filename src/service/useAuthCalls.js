import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const useAuthCalls=()=>{

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const login= async (userInfo)=>{
      
    dispatch(fetchStart())
        
        try {
            const {data} =await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/`, userInfo)
            // console.log(data);
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login İşlemi Başarılı Gerçekleşti")
            navigate("/stock")
        } 
        catch (error) {
            // console.log(error);
            dispatch(fetchFail())
            toastErrorNotify("Login işlemi Başarısız Oldu")
        }
    
    }


    return{login}


    
}
 export default useAuthCalls




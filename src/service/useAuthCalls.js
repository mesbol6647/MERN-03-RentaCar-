import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useAuthCalls=()=>{

    const navigate=useNavigate()
    const login= async (userInfo)=>{
      
    
        
        try {
            const {data} =await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/`, userInfo)
            // console.log(data);
            toastSuccessNotify("Login İşlemi Başarılı Gerçekleşti")
            navigate("/stock")
        } 
        catch (error) {
            // console.log(error);
            toastErrorNotify("Login işlemi Başarısız Oldu")
        }
    
    }


    return{login}


    
}
 export default useAuthCalls




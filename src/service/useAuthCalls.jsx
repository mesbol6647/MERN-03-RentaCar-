import axios from "axios"
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import{fetchFail, fetchStart, loginSuccess} from "../features/authSlice"
import { useDispatch } from "react-redux"

import React from 'react'

const useAuthCalls = () => {
     const navigate=useNavigate()
     const dispatch = useDispatch()
     const login = async (userInfo)=>{ 
        dispatch (fetchStart())       
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`,
            userInfo
        )
        dispatch(loginSuccess(data))
        toastSuccessNotify("Login is Success")
        navigate("/home" )
        // console.log(data);
        
    } catch (error) {
        dispatch(fetchFail())
        console.log(error);
        toastErrorNotify("Login is failed")
    }     
    
    }
  return {login}   
  
}

export default useAuthCalls





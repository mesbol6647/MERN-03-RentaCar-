import axios from "axios"
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import{fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess} from "../features/authSlice"
import { useDispatch, useSelector } from "react-redux"

import React from 'react'
import useAxios from "./useAxios"

const useAuthCalls = () => {
     const navigate=useNavigate()
     const dispatch = useDispatch()
     const {token}= useSelector((state) =>state.auth)
     const {axiosWithToken,axiosPublic}=useAxios()

     const login = async (userInfo)=>{ 
        dispatch (fetchStart())       
    try {
        // const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`,
        //     userInfo
        // )
        const {data}=await axiosPublic("/auth/login", userInfo) 
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
    const register= async(userInfo)=>{
        dispatch(fetchStart())
        try {
            const {data}= await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, 
            userInfo
        )
        dispatch(registerSuccess(data))
        navigate("/home")
        } catch (error) {
            dispatch(fetchFail())
        }
    }
     const logout = async ()=>{
        dispatch(fetchStart())
        try {
            //      await axios.get(
            //     `${process.env.REACT_APP_BASE_URL}/auth/logout`, 
            //       {
            //        headers: {Authorization: `Token ${token}` },
            //       } ) 
             
            // await axiosWithToken.get() .get yazssakta olur yazmasakda olur ama post put delete de ihtiyaç var
             await axiosWithToken("/auth/logout")
             toastSuccessNotify("Logout is Success")
             dispatch(logoutSuccess())
        // navigate("/")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Logout is failed")
        }
    }
    
  return {login, register, logout}   
  
}

export default useAuthCalls





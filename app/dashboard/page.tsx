
"use client"
import type {Nextpage} from "next"
import {useSelector} from "react-redux"
import { RootState } from "../Redux/store"; 
import { AuthProvider } from "../components/wrapper_auth/wrapper";
6

const DashboardPage: Nextpage =()=>{
    const token = useSelector((state: RootState) => state.authToken.token);
        console.log(token)
    return (
      <AuthProvider><div>dashboard - {token}</div></AuthProvider>
    )
}

export default DashboardPage
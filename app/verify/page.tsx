 "use client"
import type {Nextpage} from "next"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../Redux/reducers/authReducer";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const VerifyPage: Nextpage =()=>{

const Router =useRouter()

const dispatch =useDispatch()
  useEffect(() => {
    const getUniqueCode = (): string | null => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('uniqueCode');
    };

    const generateJWT = async (uniqueCode: string) => {
      try {
        const response = await fetch(`api/access-generate?uniqueCode=${uniqueCode}`, {
          method: 'POST'
        });
        const data = await response.json();
        console.log(data.token)
        dispatch(setToken(data.token));
        Cookies.set('token', data.token, { expires: 1 })
        Router.push("/dashboard")
        } catch (error) {
        console.error(error);
      }
    };

    const uniqueCode = getUniqueCode();
    if (uniqueCode) {
      generateJWT(uniqueCode);
    }
  }, []);

    return (
        <></>
    )
}

export default VerifyPage


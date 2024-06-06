import React from 'react'
import { footerdata } from './footerdata'

const Footer = () => {
  return (
    <div className='footer w-full p-5 '>
    <div  className='flex justify-between items-center '>
        <div className='w-[150px]'><img src="./Assets/images/logo.jpg" alt=""/></div>
        <div className='flex gap-3'>
            {
                footerdata.map((el)=>(
                    <div c key={el.name} className='border border-gray-50 p-1.5 bg-white rounded-full'>
                        <span className='text-[#df93dc]' size={10}>{el.icon}</span>
                    </div>
                ))
            }
        </div>
    </div>
    <hr className='text-white mt-3'></hr>
    <p className='text-sm text-white mt-2'>copyright 2024 @ Polycab India Limited</p>
    </div>
  )
}

export default Footer
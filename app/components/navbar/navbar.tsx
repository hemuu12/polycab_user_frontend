"use client"
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/store';
import Link from 'next/link';

const Navbar = () => {
  const token = useSelector((state: RootState) => state.authToken.token);
        console.log(token)

  return (
    <div className='w-[95%] p-2 m-auto border z-50'>
      <div className='flex justify-between items-center'>
        <div className='w-[120px] flex items-center'>
          <img src="../images/logo.jpg" className='mx-auto' alt='logo' />
        </div>
        {token ? (
          <div >
            <CgProfile size={25} className='text-gray-500'/>
          </div>
        ) : (
          <div className='bg-[#fe3b1f] w-[100px] text-center text-sm font-medium rounded-full text-white p-2.5'>
            <button className='outline-none'><Link href={"/signup"}>Sign in</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

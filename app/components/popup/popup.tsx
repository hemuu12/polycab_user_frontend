import React from 'react';

const Popup = () => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50'>
        <div className='bg-white p-7 border border-gray-400 w-[400px] h-[200px] flex flex-col justify-center items-center'>
          <div className='bg-[#05DD8E] w-9 p-2 border rounded-full mb-4'><img src="./images/tick.svg" alt="tick" /></div>
          <h1 className='font-bold text-[#FE3B1F] text-lg'>Thank you!</h1>
          <div className='text-center'>
            <p className='text-sm text-[#333333] p-5'>The request has been submitted, and they will get an email once the account is approved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
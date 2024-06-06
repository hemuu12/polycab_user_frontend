
"use client"
import React, { useEffect, useState } from 'react';
import { LuLoader2 } from 'react-icons/lu';
import { toast } from 'react-toastify';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  factoryAccess: { factoryId: string; name: string }[]
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    factoryAccess:[],
  });
  const [factories , setFactories]=useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailDomain = formData.email.split('@')[1];
    if (emailDomain === 'polycab.com') {
      // If the email domain is polycab.com, set an error
      toast.error('Polycab users can only access login with SSO');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        factoryAccess: [],
      });
      return;
    }
console.log(formData,"!!!!!!!!!!!!!!!!")
    if (formData.factoryAccess.length === 0) {
      // If no factory is selected, set an error
      toast.error('Please select at least one factory');
      return;
    }
    setIsLoading(true);
    // Use your fetch logic here
     fetch('api/request-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Successfully added');
          setIsLoading(false);
        } else {
          setIsLoading(false);
          toast.error('Failed to submit request');
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  const handleLogin = () => {
    window.location.href = 'http://localhost:4000/auth/login';
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedFactory = factories.find((factory) => factory._id === selectedValue);
    if (selectedFactory) {
      setFormData((prevData) => ({
        ...prevData,
        factoryAccess: [...prevData.factoryAccess, { factoryId: selectedFactory._id, name: selectedFactory.name }],
      }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/factory');
        const data = await response.json();
        setFactories(data);
      } catch (error) {
        console.error('Error fetching factories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='bg' onContextMenu={handleContextMenu}>
        <div className='absolute border-2 border-[#33333333] bg-white w-[350px] p-4 mt-7 rounded-xl ml-20'>
          <div className='w-[120px]'>
            <img src='./images/logo.jpg' alt='Logo' />
          </div>
          <div className='mt-3 mb-6'>
            <h1 className='poppins-Bold text-[26px] font-bold text-[#333333] leading-10'>Login with SSO</h1>
            <p className='text-xs text-[#B0B0B0] mt-1'>Are you an employee? Sign in with Microsoft</p>
            <div className='mt-3 bg-[#fe3b1f] w-[145px] text-center text-xs font-medium rounded-full text-white p-2.5'>
              <button onClick={handleLogin}>Login with SSO</button>
            </div>
          </div>
          <hr className='mt-3 border border-[#33333333] w-[95%]' />
          <div className='mt-5'>
            <p className='text-xs text-[#B0B0B0] mt-1'>Not an employee?</p>
            <h1 className='poppins-Bold text-[26px] mt-2 font-bold text-[#333333] leading-10'>Request Access</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mt-3 w-65'>
              <div>
                <h1 className='text-xs'>First Name</h1>
                <div className='border border-[#33333333] mt-1 rounded-lg p-1'>
                  <input
                    type='text'
                    className='poppins-regular w-full p-1 outline-none text-xs text-[#B0B0B0]'
                    placeholder='Enter your first name'
                    value={formData.firstName}
                    onChange={handleChange}
                    name='firstName'
                  />
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-xs'>Last Name</h1>
                <div className='border border-[#33333333] mt-1 rounded-lg p-1'>
                  <input
                    className='w-full p-1 outline-none poppins-regular text-xs text-[#4e4c4c]'
                    placeholder='Enter your last name'
                    type='text'
                    value={formData.lastName}
                    onChange={handleChange}
                    name='lastName'
                  />
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-xs'>Email</h1>
                <div className='border border-[#33333333] mt-1 rounded-lg p-1'>
                  <input
                    className='poppins-regular text-xs w-full p-1 outline-none text-[#B0B0B0]'
                    placeholder='Enter your email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    name='email'
                  />
                </div>
              </div>
              <div className='mt-2 '>
                <select className='border border-[#fe3b1f] p-2 rounded-lg text-xs bg-white' onChange={handleSelect}>
                <option className='text-xs p-3'  value={""}>Select the Factories</option>

                  {factories?.map((el) => (
                    <option className='text-xs p-3' key={el._id} value={el._id}>{el.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='mt-3 bg-[#fe3b1f] w-[120px] text-center text-xs font-medium rounded-full text-white p-2.5'>
              <button className='outline-none' type='submit'>
                {isLoading ? <LuLoader2 className='animate-spin' size={15} /> : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;

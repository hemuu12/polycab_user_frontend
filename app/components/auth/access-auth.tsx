"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { setToken } from '@/app/Redux/reducers/authReducer';
import {useDispatch } from "react-redux"
import { useRouter } from 'next/navigation';

interface Data {
  // Define your data structure here
}

const AccessAuth: React.FC = () => {
    const searchParams = useSearchParams()
 const dispatch = useDispatch()
    const token = searchParams.get('token')
    const router = useRouter(); 
  console.log(token)
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {

      if (!token) {
        setError('Token is required');
        return;
      }

      try {
        const response = await fetch(`api/access?token=${token}`);
        const fetchedData = await response.json();
    if (response.ok) {
        dispatch(setToken(token));
        router.push("/dashboard");
        alert("Token is valid");
      } else if (response.status === 401) {
        alert("Token has expired");
      } else {
        setError('Failed to fetch data');
      }
    } catch (error) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', error);
    }
}
    fetchData();
  }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <h1>Access Page</h1>
      {/* Render your data from the API here */}
    </div>
  );
};

export default AccessAuth;

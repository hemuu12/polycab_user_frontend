
import { RootState } from '@/app/Redux/store';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

interface AuthContextType {
  token: string | null;
}

const AuthContext = createContext<AuthContextType>({ token: null });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const token = useSelector((state: RootState) => state.authToken.token);
  console.log(token)
  useEffect(() => {
    const token = Cookies.get('token');
    const generateJWT = async (token: string | null) => {
      try {
        const response = await fetch(`api/verify`, {
          method: 'POST',
          headers:{
            'Authorization': `Bearer ${token}`,
          }
        });
        const data = await response.json();
      } catch (error) {
        console.error(error);
      }
    };
    generateJWT(token)
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

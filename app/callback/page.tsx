import React, { useEffect } from 'react';
import axios from 'axios';

const Callback: React.FC = () => {
  useEffect(() => {
    axios.post<{ token: string }>('http://localhost:4000/auth/saml/callback')
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('token', token);
        window.location.href = '/';
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Logging in...</h1>
    </div>
  );
};

export default Callback;

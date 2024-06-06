
"use client"
import React from 'react';
import ReduxProvider from '../Redux/redux-provider';

interface AccessLayoutProps {
  children: React.ReactNode;
}

const AccessLayout: React.FC<AccessLayoutProps> = (props) => {
  return (
    <ReduxProvider>
      <div>{props.children}</div>
    </ReduxProvider>
  );
};

export default AccessLayout;
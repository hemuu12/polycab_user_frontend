import React, { ReactNode } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div>
          <Navbar/>
      <div className="relative">
      
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;

import React from 'react'
import bgImage from '../../assets/images/login-bg1.jpg'


const AuthLayout = ({ children }) => (
  <div className="flex">
    <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
      <h2 className="text-lg font-medium text-black">Task Manger</h2>
      {children}
    </div>
    <div className="hidden md:flex w-[40vw] h-screen items-center justify-center">
      <img src={bgImage} className="w-64 lg:w-[90%]"/>
    </div>
  </div>
);

export default AuthLayout;

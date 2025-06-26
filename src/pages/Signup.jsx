import React from 'react';
import GoogleAuth from '../components/GoogleAuth';
import Navbar from '../components/Navbar';

const Signup = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <GoogleAuth />
    </div>
  );
};

export default Signup;

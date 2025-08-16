import React from 'react';
import logo from '../assets/logo.png';
import Button from './Button';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 text-center">
      <img src={logo} alt="CHAMINDU MD OFFICIAL" className="w-32 h-32 mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold mb-2">CHAMINDU MD OFFICIAL</h1>
      <p className="text-lg text-gray-700 mb-6">Your ultimate WhatsApp Bot experience</p>
      <div className="space-x-4">
        <Button text="Download App" link="#download" />
        <Button text="Learn More" link="#about" color="gray" />
      </div>
    </div>
  );
}

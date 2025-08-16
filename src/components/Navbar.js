import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">CHAMINDU MD OFFICIAL</div>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#download" className="hover:underline">Download</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}

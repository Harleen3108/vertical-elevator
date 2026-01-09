import React from 'react';
import logo from '../assets/logo.webp';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <a 
            href="https://verticaleelevatorpvtlmt.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="Vertical Elevators Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-blue-900">
              Vertical Elevators
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import logo from '../assets/logo.webp';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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

          <button
            onClick={() => navigate('/admin/login')}
            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Lock className="w-4 h-4" />
            Admin Login
          </button>
        </div>
      </div>
    </nav>
  );
}

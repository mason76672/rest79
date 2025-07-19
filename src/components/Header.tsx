import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-orange-400">
          WorldPlate
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Menu</a>
          <a href="#" className="hover:text-orange-400 transition-colors">About Us</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Specials</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="hover:text-orange-400 transition-colors">Sign In</button>
          <span className="text-gray-400">|</span>
          <button className="hover:text-orange-400 transition-colors">Register</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 md:hidden">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Menu</a>
              <a href="#" className="hover:text-orange-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Specials</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
              <hr className="border-gray-700" />
              <a href="#" className="hover:text-orange-400 transition-colors">Sign In</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Register</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
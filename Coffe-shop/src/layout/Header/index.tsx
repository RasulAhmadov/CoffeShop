import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <div className="text-white font-serif text-2xl font-bold tracking-wide cursor-pointer">
          Brewtopia
        </div>

        
        <nav className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

       
        
      </div>
    </header>
  );
};

export default Header;
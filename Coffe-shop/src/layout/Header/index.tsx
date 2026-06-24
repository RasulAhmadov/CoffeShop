import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <header 
      className="w-full sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between opacity-100 gap-4 md:gap-0 px-6 sm:px-12 md:px-[96px] py-4 md:py-0 h-auto md:h-[72px]"
      style={{
        margin: '0 auto', 
        borderBottom: '1px solid #6F4E37',
        backgroundColor: 'rgba(247, 247, 227, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      
      
      <div className="flex items-center cursor-pointer">
        <img 
          src={logo} 
          className="object-contain h-[60px] md:h-[73px]" 
        />
      </div>

     
      <nav 
        className="flex items-center gap-4 sm:gap-6 md:gap-[32px]"
      >
        <Link 
          to="/" 
          className="hover:text-[#D4A574]"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '16px', color: '#6F4E37' }}
        >
          Home
        </Link>
        <Link 
          to="/menu" 
          className="hover:text-[#D4A574]"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: '#6F4E37', fontSize: '16px' }}
        >
          Menu
        </Link>
        <Link 
          to="/about" 
          className="hover:text-[#D4A574]"
          style={{ fontFamily: "'Poppins', sans-serif", color: '#6F4E37', fontWeight: 600, fontSize: '16px' }}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="hover:text-[#D4A574]"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 600, color: '#6F4E37' }}
        >
          Contact
        </Link>
      </nav>

      
      <button
        type="button"
        className="flex items-center justify-center cursor-pointer text-white border-none"
        style={{
          width: '165px',
          height: '51px',
          gap: '10px',
          borderRadius: '8px',
          paddingTop: '12px',
          paddingRight: '24px',
          paddingBottom: '12px',
          paddingLeft: '24px',
          backgroundColor: '#D4A574',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: '15px'
        }}
      >
        Book a Table
      </button>
    </header>
  );
};
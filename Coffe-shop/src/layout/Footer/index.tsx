import React from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/img/logo-footer.png'; 
// Sosial media ikonları
import tiktokIcon from '../../assets/img/tiktok.png'; 
import instaIcon from '../../assets/img/insta.png'; 
import fbIcon from '../../assets/img/footer-facebok.png'; 
// Əlaqə ikonları
import mailIcon from '../../assets/img/mail.png'; 
import phoneIcon from '../../assets/img/phone.png'; 
import mapIcon from '../../assets/img/map-icon.png'; 

export const Footer = () => {
  return (
    <footer 
      className="w-full relative block h-auto pt-16 pb-8 md:pt-20 md:pb-10"
      style={{ backgroundColor: '#6F4E37' }}
    >
      
      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-24 flex flex-col justify-between gap-12">
        
       
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          
         
          <div className="flex flex-col gap-6 max-w-[300px]">
            <img src={logoLight} className="object-contain self-start h-[45px]" alt="Logo" />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '16px', color: '#FFFBEB' }}>
              Where Every Cup Tells a Story
            </p>
            <div className="flex items-center gap-4 cursor-pointer">
              <img src={tiktokIcon} className="object-contain w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} alt="TikTok" />
              <img src={instaIcon} className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) invert(1)' }} alt="Instagram" />
              <img src={fbIcon} className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) invert(1)' }} alt="Facebook" />
            </div>
          </div>

         
          <div className="flex flex-col gap-5">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '22px', color: '#FFFBEB' }}>
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="transition-colors hover:text-[#D4A574]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#FFFBEBCC' }}>Home</Link>
              <Link to="/menu" className="transition-colors hover:text-[#D4A574]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#FFFBEBCC' }}>Menu</Link>
              <Link to="/about" className="hover:text-[#D4A574] transition-colors" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#FFFBEBCC' }}>About Us</Link>
              <Link to="/contact" className="transition-colors hover:text-[#D4A574]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#FFFBEBCC' }}>Contact</Link>
            </nav>
          </div>

          
          <div className="flex flex-col gap-5">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '22px', color: '#FFFBEB' }}>
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#FFFBEBCC' }}>
                <img src={mailIcon} className="w-4 h-4 object-contain opacity-80" alt="Mail" />
                <span>Hello@brewtopia.cafe</span>
              </div>
              <div className="flex items-center gap-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#FFFBEBCC' }}>
                <img src={phoneIcon} className="w-4 h-4 object-contain opacity-80" alt="Phone" />
                <span>+1 (555) 123-67</span>
              </div>
              <div className="flex items-center gap-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#FFFBEBCC' }}>
                <img src={mapIcon} className="w-4 h-4 object-contain opacity-80" alt="Map" />
                <span>123 Coffee Street, Downtown</span>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col gap-5 w-full max-w-[280px]">
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '22px', color: '#FFFBEB' }}>
              Stay Updated
            </h4>
            <div className="flex flex-col gap-3">
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#FFFBEBCC' }}>E-Mail Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded focus:outline-none border-none text-stone-800" 
                style={{ height: '44px', backgroundColor: '#EFEAE4' }} 
              />
              <button 
                type="button" 
                className="cursor-pointer hover:bg-[#c49463] transition-colors border-none font-semibold text-stone-800 self-start"
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#D4A574',
                  borderRadius: '6px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        
        <div className="w-full mt-4">
          <div style={{ width: '100%', height: '1px', backgroundColor: '#FFFBEB', opacity: 0.9, marginBottom: '24px' }}></div>
          <p className="text-center" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#FFFBEB' }}>
            © 2025 Brewtopia. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
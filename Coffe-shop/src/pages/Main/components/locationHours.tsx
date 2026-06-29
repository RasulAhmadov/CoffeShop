import React from 'react';
import mapIcon from '../../../assets/img/map-icon.png'; 
import clockIcon from '../../../assets/img/clock.png'; 
import phoneIcon from '../../../assets/img/phone.png'; 
import followIcon from '../../../assets/img/cup.png'; 
import tiktokIcon from '../../../assets/img/tiktok.png'; 
import instaIcon from '../../../assets/img/insta.png'; 
import fbIcon from '../../../assets/img/facebook.png'; 

export const LocationHours = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center relative opacity-100 h-auto lg:h-[1145px] py-12 lg:py-0"
      style={{ 
        backgroundColor: '#F7F7E3', 
      }}
    >
     
      <div 
        className="flex flex-col items-center justify-center opacity-100 mx-auto w-full max-w-[1278px] h-auto lg:h-[614px] px-4 md:px-6"
      >
        <div className="w-full max-w-[547px] h-auto text-center mb-8 lg:mb-0 lg:absolute lg:top-[60px]">
          <h1 
            className="text-center opacity-100"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: '48px', 
              color: '#6F4E37',
              marginBottom: '40px' 
            }}
          >
            LOCATION And HOURS
          </h1>
        </div>
       
        <div 
          className="flex flex-col lg:flex-row justify-between items-center opacity-100 w-full gap-10 lg:gap-[196px]"
        >
          
          <div 
            className="flex items-center justify-center opacity-100 relative w-full max-w-[680px] h-[350px] sm:h-[450px] lg:h-[927px] lg:mt-[196px]"
            style={{
              backgroundColor: ' #DFCDBA',
              borderRadius: '24px' 
            }}
          >
            <img 
              src={mapIcon} 
              className="object-contain" 
              style={{ width: '65px', height: '65px' }} 
            />
          </div>

          <div 
            className="flex flex-col text-left opacity-100 w-full max-w-[550px] gap-8 lg:gap-[62px]"
          >
           
            <h2 
              style={{
                fontFamily: "'Playfair Display', serif", 
                fontWeight: 600, 
                fontSize: '32px', 
                color: '#6F4E37',
              }}
            >
              Visit Us
            </h2>

            <div className="flex flex-col gap-1">
              <h3 className="flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '18px', color: '#6F4E37' }}>
                <img src={mapIcon} alt="map" className="w-5 h-5 object-contain" style={{ opacity: 0.6 }} /> Where to Find Us
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '16px', color: '#8B4513CC', paddingLeft: '28px' }}>
                123 Coffee Street <br /> Downtown District <br /> Paris 12345
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '18px', color: '#6F4E37' }}>
                <img src={clockIcon} alt="clock" className="w-5 h-5 object-contain" style={{ opacity: 0.6 }} /> When We're Open
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '16px', color: '#8B4513CC', paddingLeft: '28px' }}>
                Monday – Sunday <br /> 7:00 AM – 9:00 PM
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '18px', color: '#6F4E37' }}>
                <img src={phoneIcon} className="w-5 h-5 object-contain" style={{ opacity: 0.6 }} /> Get in Touch
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '16px', color: '#8B4513CC', paddingLeft: '28px' }}>
                +1 (555) 123-4567 <br /> hello@brewtopia.cafe
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '18px', color: '#6F4E37' }}>
                <img src={followIcon} alt="follow" className="w-5 h-5 object-contain" style={{ opacity: 0.6 }} /> Follow Our Journey
              </h3>
              <div className="flex items-center gap-4 cursor-pointer" style={{ paddingLeft: '28px' }}>
                <img src={tiktokIcon} className="w-6 h-6 object-contain transition-transform" />
                <img src={instaIcon} className="w-6 h-6 object-contain transition-transform" />
                <img src={fbIcon} className="w-6 h-6 object-contain transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
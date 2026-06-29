import React from 'react';
import storyimg from '../../../assets/img/story.png'; 
import icon1 from '../../../assets/img/cofe_icon.png'; 
import icon2 from '../../../assets/img/khorosan_icon.png'; 
import icon3 from '../../../assets/img/address_icon.png'; 

export const OurStory = () => {
  return (
    <section 
      className="w-full flex justify-center items-center opacity-100 h-auto lg:h-[728px] py-12 lg:py-0"
      style={{ 
        backgroundColor: '#F5F5DCCC' 
      }}
    >
      <div 
        className="flex flex-col lg:flex-row justify-between items-center opacity-100 mx-auto w-full max-w-[1278px] h-auto lg:h-[558px] padding-[12px_16px] px-4 md:px-6 gap-10 lg:gap-[72px]"
      >
        <img 
          src={storyimg} 
          className="object-cover opacity-100 w-full max-w-[542px] h-[350px] sm:h-[450px] lg:h-[528px]"
          style={{
            borderRadius: '12px'
          }}
        />

        <div 
          className="flex flex-col opacity-100 w-full max-w-[632px] h-auto lg:h-[534px] justify-between gap-10 lg:gap-0"
        >
          <div 
            className="flex flex-col opacity-100 text-left w-full max-w-[631px] h-auto pl-0 pr-0 lg:pl-[60px] lg:pr-[95px] gap-6"
          >
            <h1 
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '100%',
                color: '#6F4E37'
              }}
            >
              Our Story
            </h1>
            <p 
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '174%',
                color: '#6F4E37'
              }}
            >
              Brewtopia Cafe opened its doors in 2020 with a simple mission: to bring people together over exceptional coffee. We source our beans from sustainable farms and roast them to perfection. Whether you're here for a quick espresso or a lazy afternoon, we've created a space where everyone feels at home.
            </p>
          </div>

          <div 
            className="flex flex-col sm:flex-row items-center opacity-100 w-full max-w-[594px] h-auto gap-8 sm:gap-6 lg:gap-[24px]"
          >
            <div className="flex flex-col items-center text-center opacity-100 w-full sm:w-[182.14px] h-auto sm:h-[206px] gap-[16px]">
              <img src={icon1} className="w-10 h-10 object-contain" />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '20px', lineHeight: '168%', color: '#6F4E37' }}>
                Premium Beans
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '112%', color: '#D4A574' }}>
                Ethically sourced from around the world
              </p>
            </div>

            <div className="flex flex-col items-center text-center opacity-100 w-full sm:w-[182.14px] h-auto sm:h-[206px] gap-[16px]">
              <img src={icon2} className="w-10 h-10 object-contain" />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '20px', lineHeight: '168%', color: '#6F4E37' }}>
                Fresh Daily
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '112%', color: '#D4A574' }}>
                Pastries baked fresh every morning
              </p>
            </div>

            <div className="flex flex-col items-center text-center opacity-100 w-full sm:w-[182.14px] h-auto sm:h-[206px] gap-[16px]">
              <img src={icon3} className="w-10 h-10 object-contain" />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '20px', lineHeight: '168%', color: '#6F4E37' }}>
                Cozy Atmosphere
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '112%', color: '#D4A574' }}>
                Your home away from home
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
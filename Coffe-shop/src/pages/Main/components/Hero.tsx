import React from 'react';
import coffeeHero from '../../../assets/img/coffe.jpg'; 

export const Hero = () => {
  return (
    <div 
      className="w-full bg-cover bg-center flex items-center justify-center text-center p-4 h-[500px] md:h-[808px]"
      style={{ 
        backgroundImage: `url('${coffeeHero}')`
      }}
    >
      
      <div 
        className="flex flex-col items-center justify-center mx-auto opacity-100 w-full max-w-[1200px] h-auto lg:h-[301px] p-4 md:py-[34px] md:px-[22px] gap-6 md:gap-[32px]"
      >
        
        <h1 
          className="text-center font-bold opacity-100 w-full max-w-[1020px] h-auto text-[36px] sm:text-[48px] md:text-[72px]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            lineHeight: '100%',
            color: '#F5F5DC'
          }}
        >
          Where Every Cup Tells a Story
        </h1>

        <p 
          className="w-full text-center opacity-100 text-[16px] sm:text-[18px] md:text-[22px]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            lineHeight: '120%',
            color: '#F5F5DC'
          }}
        >
          Freshly brewed coffee, warm atmosphere and a place you'll always come back to.
        </p>

        {/* Düymə Qutusu - Mobildə alt-alta düşür, planşet və kompüterdə yan-yana gəlir */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center opacity-100 w-full max-w-[447px] h-auto gap-4 md:gap-[32px]"
        >
          
          <button 
            className="flex items-center justify-center font-medium opacity-100 cursor-pointer hover:opacity-90 transition-opacity text-amber-950 w-full sm:w-[197px]"
            style={{
              height: '44px',
              borderRadius: '10px',
              padding: '18px 40px',
              gap: '10px',
              backgroundColor: '#D4A574'
            }}
          >
            Reserve Now
          </button>

          <button 
            className="flex items-center justify-center font-medium opacity-100 cursor-pointer hover:bg-[#D4A574]/10 transition-colors w-full sm:w-[218px]"
            style={{
              height: '44px',
              borderRadius: '10px',
              padding: '18px 40px',
              gap: '10px',
              border: '1px solid #D4A574',
              color: '#D4A574'
            }}
          >
            View Our Menu
          </button>

        </div>

      </div>

    </div>
  );
};
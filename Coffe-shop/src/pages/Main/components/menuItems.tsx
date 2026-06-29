import React from 'react';
import { MENU_DATA } from '../../../menuData'; 
import type { MenuCardType } from '../../../menuData';

export const MenuItems = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center opacity-100 h-auto py-12 lg:py-0 lg:h-[1346px]"
      style={{ 
        backgroundColor: '#fffbeb',
      }}
    >
      <div 
        className="flex flex-col items-center justify-center relative mx-auto w-full max-w-[1440px] h-full px-4 md:px-6"
      >
        <h1 className="text-amber-900 text-3xl md:text-4xl font-bold mb-8 lg:mb-12 text-center">
          Menu Items
        </h1>

        <div 
          className="flex flex-wrap justify-center items-center w-full max-w-[1405px] h-auto gap-8 lg:gap-[72px] opacity-10"
          style={{ opacity: 1 }}
        >
          {MENU_DATA.map((card: MenuCardType) => (
            <div 
              key={card.id} 
              className="bg-[#FFF8DC] rounded-[12px] flex flex-col justify-between text-center border border-orange-100/50 shadow-sm w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[404px] h-[440px] lg:h-[462px] p-3 lg:p-0 pb-4"
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full object-cover" 
                style={{ height: '208px', borderRadius: '8px' }} 
              />

              <div className="px-2 mt-4 flex-1">
                <h1 className="text-amber-900 text-xl lg:text-2xl font-bold mb-2">
                  {card.title}
                </h1>
                <p className="text-stone-500 text-xs lg:text-sm line-clamp-2 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="flex justify-between items-center pt-3 px-2 mt-auto">
                <p className="text-amber-800 font-bold text-lg lg:text-xl">
                  {card.price}
                </p>

                <div 
                  className="flex items-center cursor-pointer hover:opacity-80 transition-opacity justify-end opacity-100"
                  style={{
                    width: '121px',
                    height: '18px',
                    gap: '4px', 
                  }}
                >
                  <p 
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '100%',
                      textAlign: 'right',
                      color: '#8B4513CC'
                    }}
                  >
                    {card.actionText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="font-bold transition-transform active:scale-95"
          style={{
            width: '242px',
            height: '51px',
            backgroundColor: '#D4A574',
            borderRadius: '8px',
            color: '#8B4513',
            marginTop: '40px',
            cursor: 'pointer'
          }}
        >
          See Full Menu
        </button>
      </div>
    </section>
  );
};
// Xarici qlobal data və tiplər
import { MENU_DATA } from '../../../menuData'; 
import type { MenuCardType } from '../../../menuData';

export const MenuItems = () => {
 
  return (
    <section 
      className="w-full flex flex-col items-center justify-center opacity-100"
      style={{ 
        backgroundColor: '#fffbeb',
        height: '1346px' 
      }}
    >
      
      <div 
        className="flex flex-col items-center justify-center relative mx-auto"
        style={{
          width: '1440px',
          height: '100%'
        }}
      >
        
        
        <h1 className="text-amber-900 text-4xl font-bold mb-12">
          Menu Items
        </h1>

        
        <div 
          className="flex flex-wrap justify-center items-center"
          style={{
            width: '1405px',   
            height: '996px',   
            gap: '72px',       
            opacity: 1
          }}
        >
          {MENU_DATA.map((card: MenuCardType) => (
           
            <div 
              key={card.id} 
              className="bg-[#FFF8DC]  rounded-[12px] flex flex-col justify-between text-center border border-orange-100/50 shadow-sm"
              style={{
                width: '404px',
                height: '462px',
                opacity: 1
              }}
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full object-cover" 
     style={{ height: '208px', borderRadius: '8px' }} 
/>

             
              <div className="px-2">
                <h1 className="text-amber-900 text-2xl font-bold mb-2">
                  {card.title}
                </h1>
                <p className="text-stone-500 text-sm line-clamp-2 leading-relaxed">
                  {card.desc}
                </p>
              </div>

            
              <div className="flex justify-between items-center pt-3 px-2 ">
                <p className="text-amber-800 font-bold text-xl">
                  {card.price}
                </p>

                <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity justify-end opacity-100 "
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

       
        <button    className="font-bold"
          style={{
            width: '242px',
            height: '51px',
            backgroundColor: '#D4A574',
            borderRadius: '8px',
            gap: '10px',
            color: '#8B4513',
            marginTop: '50px',
            cursor: 'pointer'
            
          }}
        >
          See Full Menu
        </button>
      </div>
    </section>
  );
};
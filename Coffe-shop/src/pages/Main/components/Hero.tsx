import coffeeHero from '../../../assets/img/coffe.jpg'; 

export const Hero = () => {
  return (
    


    <div 
      className="w-full bg-cover bg-center flex items-center justify-center text-center p-4"
      style={{ 
        backgroundImage: `url('${coffeeHero}')`,
        height: '808px' 
      }}
    >
      
     
      <div 
        className="flex flex-col items-center justify-center mx-auto opacity-100"
        style={{ 
          width: '1200px',
          height: '301.px',
          padding: '34px 22px',
          gap: '32px'
        }}
      >
        
       
        <h1 
          className="text-center font-bold opacity-100"
          style={{
            width: '1020px',
            height: '96px',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '72px',
            lineHeight: '100%',
            color: '#F5F5DC'
          }}
        >
          Where Every Cup Tells a Story
        </h1>

        
        <p 
          className="w-full text-center opacity-100"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '100%',
            color: '#F5F5DC'
          }}
        >
          Freshly brewed coffee, warm atmosphere and a place you'll always come back to.
        </p>

        
        <div 
          className="flex justify-center items-center opacity-100"
          style={{
            width: '447px',
            height: '44px',
            gap: '32px'
          }}
        >
          
          
          <button 
            className="flex items-center justify-center font-medium opacity-100 cursor-pointer hover:opacity-90 transition-opacity text-amber-950"
            style={{
              width: '197px',
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
            className="flex items-center justify-center font-medium opacity-100 cursor-pointer hover:bg-[#D4A574]/10 transition-colors"
            style={{
              width: '218px',
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
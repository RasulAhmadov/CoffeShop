// Şəkillərin yolları (Main-lə eyni qovluqdadırsa, import yollarını dəqiqləşdirərsən)
import storyimg from '../../../assets/img/story.png'; 
import icon1 from '../../../assets/img/cofe_icon.png'; 
import icon2 from '../../../assets/img/khorosan_icon.png'; 
import icon3 from '../../../assets/img/address_icon.png'; 

export const OurStory = () => {
  return (
    
    
  <section 
    className="w-full flex justify-center items-center opacity-100"
    style={{ 
      height: '728px',
      backgroundColor: '#F5F5DCCC' 
    }}
  >
    
    <div 
      className="flex justify-between items-center opacity-100 mx-auto"
      style={{
        width: '1278px',
        height: '558px',
        padding: '12px 16px',
        gap: '72px'
      }}
    >
     
      <img 
        src={storyimg} 
        className="object-cover opacity-100"
        style={{
          width: '542px',
          height: '528px',
          borderRadius: '12px'
        }}
      />

      
      <div 
        className="flex flex-col opacity-100"
        style={{
          width: '632px',
          height: '534px',
          justifyContent: 'space-between'
        }}
      >
        
        <div 
          className="flex flex-col opacity-100 text-left"
          style={{
            width: '631px',
            height: '358px',
            paddingLeft: '60px',
            paddingRight: '95px',
            gap: '24px'
          }}
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
          className="flex items-center opacity-100"
          style={{
            width: '594px',
            height: '206px',
            gap: '24px'
          }}
        >
          
          <div className="flex flex-col items-center text-center opacity-100" style={{ width: '182.14px', height: '206px', gap: '16px' }}>
            <img src={icon1}  className="w-10 h-10 object-contain" />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '20px', lineHeight: '168%', color: '#6F4E37' }}>
              Premium Beans
            </h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '112%', color: '#D4A574' }}>
              Ethically sourced from around the world
            </p>
          </div>

          
          <div className="flex flex-col items-center text-center opacity-100" style={{ width: '182.14px', height: '206px', gap: '16px' }}>
            <img src={icon2}  className="w-10 h-10 object-contain" />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '20px', lineHeight: '168%', color: '#6F4E37' }}>
              Fresh Daily
            </h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '112%', color: '#D4A574' }}>
              Pastries baked fresh every morning
            </p>
          </div>

          
          <div className="flex flex-col items-center text-center opacity-100" style={{ width: '182.14px', height: '206px', gap: '16px' }}>
            <img src={icon3}  className="w-10 h-10 object-contain" />
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
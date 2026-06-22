import img1 from '../../../assets/img/img1.png';
import img2 from '../../../assets/img/img2.png';
import img3 from '../../../assets/img/img3.png';
import img4 from '../../../assets/img/img4.png';
import img5 from '../../../assets/img/img5.png';
import img6 from '../../../assets/img/img6.png';
import img7 from '../../../assets/img/img7.png';
import img8 from '../../../assets/img/img8.png';

export const ExperienceGallery = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-start relative"
      style={{ 
        backgroundColor: '#F7F7E3', 
        minHeight: '1350px', 
        paddingTop: '41px',  
        paddingBottom: '80px'
      }}
    >
      
      <div 
        className="text-center opacity-100 mb-16"
        style={{ 
          width: '647px',
          height: '112px', 
        }} 
      >
        <h1 
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontWeight: 700, 
            fontSize: '40px', 
            lineHeight: '120%', 
            color: '#6F4E37',
            marginBottom: '12px'
          }}
        >
          The Brewtopia Experience
        </h1>
        <p 
          style={{ 
            fontFamily: "'Poppins', sans-serif", 
            fontWeight: 400, 
            fontSize: '16px', 
            color: '#A1826A' 
          }}
        >
          More than just coffee
        </p>
      </div>

      
      <div 
        className="flex justify-center items-start mx-auto opacity-100"
        style={{
          width: '912px', 
          gap: '24px' 
        }}
      >
        
       
        <div className="flex flex-col text-center" style={{ gap: '24px', width: '288px' }}>
          <img src={img1} className="w-full object-cover" style={{ height: '384px', borderRadius: '12px' }} />
          <img src={img2} className="w-full object-cover" style={{ height: '280px', borderRadius: '12px' }} />
          <img src={img3} className="w-full object-cover" style={{ height: '280px', borderRadius: '12px' }} />
        </div>

        
        <div className="flex flex-col text-center" style={{ gap: '24px', width: '288px', paddingTop: '40px' }}>
          {/* Ortadakı sütun Figmada bir az aşağıdan başlayırsa paddingTop ilə nizamlayırıq */}
          <img src={img4} className="w-full object-cover" style={{ height: '280px', borderRadius: '12px' }} />
          <img src={img5} className="w-full object-cover" style={{ height: '384px', borderRadius: '12px' }} />
          <img src={img6} className="w-full object-cover" style={{ height: '255px', borderRadius: '12px' }} />
        </div>

        
        <div className="flex flex-col text-center" style={{ gap: '24px', width: '288px' }}>
          <img src={img7} className="w-full object-cover" style={{ height: '480px', borderRadius: '12px' }} />
          <img src={img8} className="w-full object-cover" style={{ height: '517px', borderRadius: '12px' }} />
        </div>

      </div>
    </section>
  );
};
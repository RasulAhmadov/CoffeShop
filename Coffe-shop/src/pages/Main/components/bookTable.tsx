import React from 'react';

export const BookTable = () => {
  return (
    <section 
      className="w-full relative block" 
      style={{ 
        height: '1284px',
        backgroundColor: '#F7F7E3', 
      }}
    >
      
      <div className="relative mx-auto h-full" style={{ width: '1440px' }}>
        
    
      <div 
          className="text-center" 
          style={{ 
            position: 'absolute',
            width: '647px',
            height: '112px', 
            top: '45px',
            left: '396px'
          }} 
        >
          <h1 
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: '40px', 
              
              color: '#6F4E37',
              marginBottom: '12px'
            }}
          >
            Book Your Table
          </h1>
          <p 
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: 400, 
              fontSize: '16px', 
              color: '#A1826A' 
            }}
          >
            Reserve your spot and enjoy the Brewtopia experience
          </p>
        </div>

        
        <div 
          className="opacity-100 shadow-sm"
          style={{
            position: 'absolute',
            width: '1049px',
            height: '935px',
            top: '247px',  
            left: '196px', 
            backgroundColor: '#FFFBEB',
            borderRadius: '12px',
          }}
        >
          <div className="w-full h-full relative">

         
            <div style={{ position: 'absolute', top: '50px', left: '60px', width: '450px' }}>
              <label className="block text-stone-700 text-sm font-semibold mb-2">Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

        
            <div style={{ position: 'absolute', top: '150px', left: '60px', width: '450px' }}>
              <label className="block text-stone-700 text-sm font-semibold mb-2">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

          
            <div style={{ position: 'absolute', top: '150px', left: '540px', width: '450px' }}>
              <label className="block text-stone-700 text-sm font-semibold mb-2">E-Mail Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

            
            <div style={{ position: 'absolute', top: '250px', left: '60px', width: '280px' }}>
              <label className="block text-stone-700 text-sm font-semibold mb-2">Date <span className="text-red-500">*</span></label>
              <input type="date" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

           
            <div style={{ position: 'absolute', top: '250px', left: '380px', width: '280px' }}>
              <label className="block text-stone-700 text-sm font-semibold mb-2">Time <span className="text-red-500">*</span></label>
              <input type="time" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

           
            <div style={{ position: 'absolute', top: '250px', left: '700px', width: '290px' }}>
              <label className="block text-stone-700 text-sm font-semibold mb-2">Guests <span className="text-red-500">*</span></label>
              <input type="number" min="1" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

           
            <p style={{ position: 'absolute',
                 top: '335px', left: '60px', fontFamily: "'Poppins', sans-serif",
                  fontSize: '12px',
                   color: '#A1826A' }}>
              We recommend booking at least 1 hour in advance
            </p>

            
            <div style={{ position: 'absolute', top: '380px', left: '60px', width: '930px' }}>
              <label className="block text-stone-700 text-sm font-semibold mb-2">Special Request</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none resize-none" style={{ height: '120px' }}></textarea>
            </div>

           
            <button 
              type="submit"
              className="flex items-center justify-center cursor-pointer hover:bg-[#c49463] transition-colors"
              style={{
                position: 'absolute',
                width: '213px',
                height: '59px',
                top: '780px', 
                left: '418px',   
                borderRadius: '8px',
                backgroundColor: '#D4A574E5',
                color: '#8B4513',
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                border: 'none',
                


                
              }}
            >
              Reserve Now
            </button>

            
            <p 
              style={{ 
                position: 'absolute',
                top: '860px',
                left: '0px',
                width: '1049px', 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#6f4e37'
              }}
            >
              We'll confirm your reservation within 1 hour via email or phone
            </p>

          </div>
        </div>

        
        <p 
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '196px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '14px',
            color: '#8B451399'
          }}
        >
          Fields marked with <span className="text-red-500">*</span> are required
        </p>

      </div>
    </section>
  );
};
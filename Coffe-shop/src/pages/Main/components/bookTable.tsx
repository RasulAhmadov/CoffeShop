import React from 'react';

export const BookTable = () => {
  return (
    <section 
      className="w-full relative block h-auto lg:h-[1284px] py-12 lg:py-0" 
      style={{ 
        backgroundColor: '#F7F7E3', 
      }}
    >
      
      <div className="relative mx-auto h-full w-full max-w-[1440px] px-4 md:px-6">
        
       
        <div 
          className="text-center w-full lg:w-[647px] h-auto lg:h-[112px] lg:absolute lg:top-[45px] lg:left-[396px] mb-8 lg:mb-0" 
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
          className="opacity-100 shadow-sm mx-auto w-full max-w-[1049px] h-auto lg:h-[935px] lg:absolute lg:top-[247px] lg:left-[196px] p-6 md:p-10 lg:p-0"
          style={{
            backgroundColor: '#FFFBEB',
            borderRadius: '12px',
          }}
        >
          <div className="w-full h-full relative flex flex-col gap-6 lg:block">

          
            <div className="w-full lg:w-[450px] lg:absolute lg:top-[50px] lg:left-[60px]">
              <label className="block text-stone-700 text-sm font-semibold mb-2">Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

            <div className="w-full lg:w-[450px] lg:absolute lg:top-[150px] lg:left-[60px]">
              <label className="block text-stone-700 text-sm font-semibold mb-2">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

           
            <div className="w-full lg:w-[450px] lg:absolute lg:top-[150px] lg:left-[540px]">
              <label className="block text-stone-700 text-sm font-semibold mb-2">E-Mail Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
            </div>

            
            <div className="w-full flex flex-col md:flex-row gap-6 lg:block">
          
              <div className="w-full md:w-1/3 lg:w-[280px] lg:absolute lg:top-[250px] lg:left-[60px]">
                <label className="block text-stone-700 text-sm font-semibold mb-2">Date <span className="text-red-500">*</span></label>
                <input type="date" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
              </div>

              
              <div className="w-full md:w-1/3 lg:w-[280px] lg:absolute lg:top-[250px] lg:left-[380px]">
                <label className="block text-stone-700 text-sm font-semibold mb-2">Time <span className="text-red-500">*</span></label>
                <input type="time" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
              </div>

              
              <div className="w-full md:w-1/3 lg:w-[290px] lg:absolute lg:top-[250px] lg:left-[700px]">
                <label className="block text-stone-700 text-sm font-semibold mb-2">Guests <span className="text-red-500">*</span></label>
                <input type="number" min="1" className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none" style={{ height: '48px' }} />
              </div>
            </div>

         
            <p 
              className="w-full lg:w-auto lg:absolute lg:top-[335px] lg:left-[60px]"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12px',
                color: '#A1826A' 
              }}
            >
              We recommend booking at least 1 hour in advance
            </p>

            {/* Special Request */}
            <div className="w-full lg:w-[930px] lg:absolute lg:top-[380px] lg:left-[60px]">
              <label className="block text-stone-700 text-sm font-semibold mb-2">Special Request</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-stone-200 bg-white focus:outline-none resize-none" style={{ height: '120px' }}></textarea>
            </div>

        
            <div className="w-full flex justify-center lg:block">
              <button 
                type="submit"
                className="flex items-center justify-center cursor-pointer hover:bg-[#c49463] transition-colors w-full sm:w-[213px] h-[59px] lg:absolute lg:top-[780px] lg:left-[418px]"
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#D4A574E5',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  border: 'none'
                }}
              >
                Reserve Now
              </button>
            </div>

            <p 
              className="w-full lg:absolute lg:top-[860px] lg:left-[0px] lg:w-[1049px] text-[16px] md:text-[20px]"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                lineHeight: '130%',
                textAlign: 'center',
                color: '#8B4513CC'
              }}
            >
              We'll confirm your reservation within 1 hour via email or phone
            </p>

          </div>
        </div>

        
        <p 
          className="w-full text-center lg:text-left mt-6 lg:mt-0 lg:absolute lg:bottom-[40px] lg:left-[196px]"
          style={{
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
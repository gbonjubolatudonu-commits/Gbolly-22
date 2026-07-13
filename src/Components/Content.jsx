import React from 'react'
import { Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"; 
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from 'framer-motion'; 
import River from '../assets/River.png'
import Brige from '../assets/Bridge.png'
import Travel from '../assets/Travel.jpg'
import Sunrise from '../assets/Sunrise.png'
import { Swiper, SwiperSlide  } from 'swiper/react'
import { Box, Car, Home, Plane } from 'lucide-react';
function Content() {

  return (
    <>
       {/* <div className='hidden md:block'> */}

       <Swiper 
          modules={[Pagination,Autoplay]}
          // navigation
          pagination={{clickable: true}}
          autoplay={{ duration: 5000 }}
          
          loop={true}>
        
        <SwiperSlide> 
           <section className='relative h-112.5 bg-cover  bg-center'
            style={{backgroundImage: `url(${Brige})`}}> 
            <div className='py-15'>
              <h1 className='text-white text-2xl  font-bold md:text-6xl text-center'>BOOK THE NEXT ADVENTURE</h1>
               <p className='text-white text-2xl font-normal md:text-3xl  text-center my-4'>Search and compare the best flight,hotels and car rentals </p>
            </div>
            {/* <div className=' flex  border border-white gap-6 items-center mt-6  mx-5 md:mx-10 bg-gray-600 md:gap-10 justify-center'> 
   
                  <div className=''>
                     <Plane className='text-white cursor-pointer hover:text-amber-200  ' size={50}/>
                      <h4 className=' text-sm text-black '>Flight</h4>
                   </div>
 
                   <div>
                       <Home className='text-white cursor-pointer hover:text-amber-200' size={50} />
                     <h1 className='text-black text-sm'>Hotel</h1>
                   </div>

                   <div>
                     <Car className='text-white cursor-pointer hover:text-amber-200'size={50} />
                     <h1 className='text-black text-sm'>Cars</h1>
                   </div>

                   <div>
                     <Box className='text-white cursor-pointer hover:text-amber-200' size={50}/>
                     <h1 className='text-black text-sm'>Packages</h1>
                   </div>
                
            </div> */}

            </section>

        </SwiperSlide>
          
        

         {/* < motion.div 
                   initial={{ opacity:0.5, scale:0.5}}
                   animate ={{opacity:1, scale:1}}
                   transition={{duration:0.5}}
               className='flex  flex-wrap gap-6 mt-10 justify-center  border-white bg-gray-900 md:justify-start'>
                

                 <div>
                    <h4 className='text-orange-500'>16+</h4>
                    <h4 className='text-white text-sm'>Projects Done</h4>
                 </div>

                  <div>
                    <h4 className='text-orange-500'>50+</h4>
                    <h4 className='text-white text-sm'>Happy client</h4>
                 </div>
             </ motion.div> */}
        <SwiperSlide> 
           <section className='relative h-112.5 bg-cover  bg-center'
           style={{backgroundImage: `url(${River})`}}> 
           {/* <div className='absolute inset-0 bg-black/50'> */}
           <div className='py-15'>
             <h1 className='text-white text-2xl font-bold md:text-6xl text-center'>BOOK THE NEXT ADVENTURE</h1>
              <p className='text-white text-2xl  font-normal md:text-3xl text-center my-4'>search and compare the best flight,hotels and car rentals </p>
           </div>
            {/* <div className=' flex   border-y-4  border-x-4 border-white  flex-wrap  justify-between items-center mt-6  ml-10 md:ml-28 bg-gray-600 shadow p-10 w-3/6 h-2/6'> 
   
                  <div>
                     <Plane className='text-white cursor-pointer hover:text-amber-200 ' size={50}/>
                      <h4 className=' text-sm text-black '>Flight</h4>
                   </div>

                   <div>
                       <Home className='text-white cursor-pointer hover:text-amber-200' size={50} />
                     <h1 className='text-black text-sm'>Hotel</h1>
                   </div>

                   <div>
                     <Car className='text-white cursor-pointer hover:text-amber-200'size={50} />
                     <h1 className='text-black text-sm'>Cars</h1>
                   </div>

                   <div>
                     <Box className='text-white cursor-pointer hover:text-amber-200' size={50}/>
                     <h1 className='text-black text-sm'>Packages</h1>
                   </div>
                
            </div>
            */}
           {/* </div> */}
           </section>
        </SwiperSlide>
        

             <SwiperSlide >
               <section className='relative h-112.5 bg-cover  bg-center '
               style={{backgroundImage: `url(${Sunrise})`}} >
               <div className='py-15'>
                   <h1 className='text-white text-2xl font-bold md:text-6xl text-center'>BOOK THE NEXT ADVENTURE</h1>
                   <p className='text-white text-2xl  font-normal md:text-3xl text-center my-4'>search and compare the best flight,hotels and car rentals </p>
           </div>

               </section>
              </SwiperSlide>

            
          <SwiperSlide> 
           <section className='relative h-112.5 bg-cover  bg-center'
           style={{backgroundImage: `url(${Travel})`}}> 
           {/* <div className='absolute inset-0 bg-black/50'> */}
           <div className='py-15'>
             <h1 className='text-white text-2xl font-bold md:text-6xl text-center'>BOOK THE NEXT ADVENTURE</h1>
             <p className='text-white text-2xl  font-normal md:text-3xl text-center my-4'>search and compare the best flight,hotels and car rentals </p>
           </div>
            {/* <div className=' flex   border-y-4  border-x-4 border-white flex-wrap   justify-between items-center mt-6  ml-10 md:ml-28 bg-gray-600 shadow p-10 w-2/5 h-2/5'> 
   
                  <div>
                     <Plane className='text-white cursor-pointer hover:text-amber-200' size={50}/>
                      <h4 className=' text-sm text-black '>Flight</h4>
                   </div>

                   <div>
                       <Home className='text-white cursor-pointer hover:text-amber-200' size={50} />
                     <h1 className='text-black text-sm '>Hotel</h1>
                   </div>

                   <div>
                     <Car className='text-white cursor-pointer hover:text-amber-200'size={50} />
                     <h1 className='text-black text-sm '>Cars</h1>
                   </div>

                   <div>
                     <Box className='text-white cursor-pointer hover:text-amber-200' size={50}/>
                     <h1 className='text-black text-sm'>Packages</h1>
                   </div>
                
            </div> */}
           {/* </div> */}
           </section>
        </SwiperSlide>


            

        
       </Swiper>
          {/* </div> */}
    </>
  )
}

export default Content

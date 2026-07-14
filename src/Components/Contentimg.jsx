import React from 'react'
import Dubai from '../assets/Dubai.jpg'
import Johassebug from '../assets/Johassebug.jpg'
import London from '../assets/London.jpg'
import NewYork from '../assets/NewYork.jpg'
import Paris from '../assets/Paris.jpg'
import Turke from '../assets/Turke.jpg'
import London2 from '../assets/London2.jpg'
import { BookAIcon, Headset, LockKeyhole, MessageCircle, Monitor } from 'lucide-react'
// import { FaFacebook } from 'react-icons/fa'
import icon from '../assets/icon.png'

function Contentimg() {
  return (
    <>
      <div>

         <div className=' text-2xl flex justify-between items-center m-6'>
           <h1 className='text-3xl font-bold'>Popular Destination</h1>
            <button className='border rounded-full bg-amber-500 p-2 hover:bg-amber-400'>View all</button>
            </div>

            <div className=' grid grid-cols-2  md:grid-cols-3   lg:grid-cols-8 justify-between items-center p-3.5 gap-6'>
                <img src={Dubai} alt="" />
                 <img src={Johassebug} alt="" />
                   <img src={London} alt=""  />
                   <img src={NewYork} alt="" />
                   <img src={Paris} alt=""  />
                   <img src={Dubai} alt="" />
                   <img src={Turke} alt="" />
                   <img src={London2} alt="" />
          </div>
     

               <div className='p-4 rounded-lg w-full mx-auto mt-4  bg-gray-300 ml-6'>
              <h1 className='text-2xl font-bold' >TRAVEL ADIVISORY: TRANSIT PROCEDURES FOR LONDON-BOARD PASSENGER VIA ABUJA (ABV) </h1>
              <p className='mb-3'>Passengers travelling through Abuja (ABV) and connecting to Air Peace' s London flights (Heathrow or Gatwick) are hereby advised to collect their checked baggage upon arrival in Abuja and re-check in for their onward international flight. This procedure is mandatory for all transiting passengers</p>
            
                <p className='mb-3'> Please note that failure to retrieve and re-check in your baggage may result in delays or missed connections.</p>
                    To ensure a smooth travel experience, passengers are strongly encouraged to allow <br /> adequate connection time in Abuja for:
                  <p className='mb-2'> Baggage collection </p>
                 <p className='mb-2'> Security screening</p> 
                 <p className='mb-2'>International check-in formalities</p>  
                 <p className='mb-4'> We kindly request all passengers, travel agencies, and corporate partners to take note of this important travel information.</p>
                <p> Thank you for choosing Air Peace.</p>
            </div>

  
                <h1 className='text-3X1  text-xl m-5 text-center font-extrabold'>FEATURES / BENEFITS</h1>

           <div className='p-4 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:p-10'>

            <div className='bg-blue-950 p-4 text-orange-600 rounded-lg w-full mx-auto mb-3'>
               <Monitor   className='text-orange-700 w-full cursor-pointer ' size={48}/> 
               <h2 className='text-orange-600  font-semibold text-xl mb-3 text-center'>Best Price Guarantee</h2>
               <p className='text-gray-300 text-sm leading-relaxed text-center font-medium'>We compare hundreds  of travel site to find you the best price</p>
            </div>

              <div className='bg-blue-950 p-4  rounded-lg w-full mx-auto mb-3' >
                <Headset className='text-orange-700 w-full cursor-pointer'  size={48}/>
                <h2 className='text-orange-700 font-semibold text-xl mb-3 text-center'>24/7 Customer Support</h2>
                <p className='text-gray-300 text-sm leading-relaxed text-center font-medium'>Our team is here to help you anytime anywhere</p>
              </div>

              <div className='bg-blue-950 p-4 rounded-lg w-full mx-auto mb-3'>
                <LockKeyhole className='text-orange-700 w-full cursor-pointer' size={48} />
                <h2 className='text-orange-700 font-semibold text-xl mb-3 text-center'>Secure Booking</h2>
                <p className='text-gray-300 text-sm leading-relaxed text-center font-medium'>Your booking is safe with us.We use trusted and secure payment</p>
              </div>


             <div className='bg-blue-950 p-4  rounded-lg w-full mx-auto mb-3'>
              <BookAIcon className='text-orange-700 w-full cursor-pointer' size={48} />
              <h2 className='text-orange-600 font-semibold text-xl mb-3 text-center'>Easy & Fast Booking</h2>
              <p className='text-gray-300 text-sm leading-relaxed text-center font-medium'>Book your trip in  minutes with our simple and fast process </p>
             </div>
           </div>
   
              <footer className=' bg-blue-950 py-4 '>
                <div>

                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center space-x-10 space-y-10 mr-5 text-white'>
                    {/* justify-between items-center space-x-10 md:mb-7 mb-10 */}
                      <div className='ml-6 mt-6 text-white'>
                        <h1 className='text-3xl '>Information</h1>
                        <p className='hover:text-orange-300 cursor-progress'>FAQs</p> 
                        <p className='hover:text-orange-300 cursor-progress'>Terms & Condition</p>
                        <p className='hover:text-orange-300 cursor-progress'>Departure & Arrivals</p>
                        <p className='hover:text-orange-300 cursor-progress'>Baggey Policy</p>
                        <p className='hover:text-orange-300 cursor-progress'>Travel Advisory</p>
                     </div>

                        <div className='ml-6 mt-6'>
                        <h1 className='text-3xl'>Support</h1>
                        <p className='hover:text-orange-300 cursor-progress'>Help & Contact</p> 
                        <p className='hover:text-orange-300 cursor-progress'>Special Assistance</p>
                        <p className='hover:text-orange-300 cursor-progress'>Lost Property</p>
                        <p className='hover:text-orange-300 cursor-progress'>Airport change</p>
                        <p className='hover:text-orange-300 cursor-progress'>Safety Reporting</p>
                     </div>

                       
                        <div className='ml-6 mt-6'>
                        <h1 className='text-3xl '>Deals</h1>
                        <p className='hover:text-orange-300 cursor-progress'>Student Discount</p> 
                        <p className='hover:text-orange-300 cursor-progress'>Partnerships</p>
                        <p className='hover:text-orange-300 cursor-progress'>Gradute Trainee</p>
                        <p className='hover:text-orange-300 cursor-progress'>Program</p>
                     </div>


                      <div className='ml-6'>
                        <h1 className='text-3xl'>TUDOS</h1>
                        <p className='hover:text-orange-300 cursor-progress'>About</p> 
                        <p className='hover:text-orange-300 cursor-progress'>Careers</p>
                        <p className='hover:text-orange-300 cursor-progress'>Blog</p>
                        <p className='hover:text-orange-300 cursor-progress'>Newsletter</p>
                     </div>
                </div>

                

                   <div className='bg-black flex md:justify-between md:items-center md:m-10 md:p-8 rounded-md space-x-4 gap-2 p-4 m-5'>
                      <div className='md:mx-4 '>
                           <h1 className='text-white'>Copyright © 2026 Air Peace Limited. All Rights Reserved</h1>
                       </div>
                           <div className='md:mx-4 '>
                            <img className='cursor-pointer md:w-30 w-20'src={icon}  /> 
                           </div>
                   </div>


                   <div>
                    <a 
                    href="http://wa.me/2347063685379"
                    className='fixed bottom-24 right-6 z-200 bg-green-600 text-white p-4 
                    rounded-full shadow-2xl hover:scale-110 transition-transform'
                    >
                    <MessageCircle size={30} />
                    <span className='absolute -top-2 -left-2 bg-red-500 text-{10px} px-2 py-1 rounded-full animate-bounce'>
                      help?
                    </span>
                    </a>
                   </div>
                  </div>
              </footer>
             

      </div>
    </>
  )
}
    
export default Contentimg

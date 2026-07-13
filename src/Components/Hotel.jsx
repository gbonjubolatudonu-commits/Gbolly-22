import React from 'react'
import { Plane } from 'lucide-react'
import Family from '../assets/Family.jpg'

function Hotel() {
  return (
    <div>
       <div className='flex justify-between items-center  bg-blue-950 p-3'>
           <div className='flex justify-center items-center'>
                <Plane  className='text-amber-600 cursor-pointer hover:text-amber-200' size={50}/>
                  <h1 href="/" className='text-3xl font-bold text-white m-5'>TUDOS</h1>
                  </div>

                 <div className='ml-7 items-stretch justify-between'>
                    <ul className='md:flex text-white items-center gap-10 font-bold ml-5'>
                      <p className=' text-white  p-1  ml-3  hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full '>Flight</p>
                      <p className=' text-white  p-1  ml-3  hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white rounded-full'>Hotel</p>
                      <p className=' text-white  p-1  ml-3  hover:bg-amber-300 transition-all text-2xl  ease-in-out border-b border-white  rounded-full'>Cars</p>
                      <p className=' text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Packages</p>
                      <p className= 'text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Deals</p>
                    </ul>
              </div>      
      </div>
             

           <h1 className='text-center text-3xl font-bold m-10 text-orange-700'>Hotel Category Content For TripGenie</h1>
          
            <div className='justify-between flex items-center w-full rounded-lg'>

              <div className='m-9'>
               <h1 className='text-3xl font-bold mb-10'>LUXURY BEACHFRONT RESORTS </h1>
                  <p className='mb-3 md:font-bold '>5-Star Comfort,Oceans Views, and World-class Service,Infinity Pools ,Spa, Fine Dinning , Private Beach </p>
                  <p className='mb-3 md:font-bold '>5-Star Comfort,Oceans Views, and World-class Service,Infinity Pools ,Spa, Fine Dinning , Private Beach </p>
                  <p className='mb-3 md:font-bold '>5-Star Comfort,Oceans Views, and World-class Service,Infinity Pools ,Spa, Fine Dinning , Private Beach </p>
                  <p className='mb-3 md:font-bold '>5-Star Comfort,Oceans Views, and World-class Service,Infinity Pools ,Spa, Fine Dinning , Private Beach </p>
                  <p className='mb-3 md:font-bold '>5-Star Comfort,Oceans Views, and World-class Service,Infinity Pools ,Spa, Fine Dinning , Private Beach </p>
               <span className='mb-3 font-medium text-orange-500 text-2xl'>#350,000 per night</span>
              </div>
               
               <div>
               <img src={Family} alt=""  className='p-3 border rounded-full mr-10 mb-6'/>
               </div>

             </div>


             
                   <footer className=' bg-blue-950 py-4 '>
                      <div>

                        
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center space-x-10 space-y-10 mr-5 text-white'>
                      <div className='ml-6 mt-6'>
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
                      </div>


                   </footer>
    </div>
  )
}

export default Hotel

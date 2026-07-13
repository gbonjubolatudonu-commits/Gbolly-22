import React from 'react'
import { Plane } from 'lucide-react'
import Water from '../assets/water.jpg'
import Boat from '../assets/Boat.jpg'
import Desert from '../assets/Desert.jpg'


function Package() {
  return (
    <div>
      <div className='flex justify-between items-center  bg-blue-950 p-3'>
         <div className='flex justify-center items-center'>
                <Plane  className='text-amber-600 cursor-pointer hover:text-amber-200' size={50}/>
                  <h1 href="/" className='text-3xl font-bold text-white m-5'>TUDOS</h1>
                  </div>

                 <div className='ml-7 items-stretch justify-between'>
                    <ul className='md:flex text-white items-center gap-10 font-bold ml-5'>
                      <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full '>Flight</p>
                      <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white rounded-full'>Hotel</p>
                      <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl  ease-in-out border-b border-white  rounded-full'>Cars</p>
                      <p className= 'text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Packages</p>
                      <p className= 'text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Deals</p>
                    </ul>
              </div>      
      </div>

               <h1 className='text-center font-bold text-3xl m-5 text-orange-800'>NICE  PLACES YOU  WILL  LOVE TO VISIT</h1>
              <div className='justify-between flex items-center  w-full  mb-4 ' >

                 <div>
                  <img   className='p-3 border rounded-full mt-4' src={Water} alt=""/>
                 </div>

                 <div className='m-9'>
                    <h1 className='text-3xl font-bold mb-10'>Maldives Luxury Beach Escape</h1>
                    <p className='mb-3 md:font-bold '>white sands, overWater Villa,and zero stress</p>
                    <p className='mb-3 md:font-bold '>Unwind in paradise with turquoise water and private beach access. Wake up to ocean views,enjoy  spa treatment , and end your  days with sunset dinners on the beach . Perfect for couples and honeymooners </p>
                    <p className='mb-3 md:font-bold hidden md:block'>Unwind in paradise with turquoise water and private beach access. Wake up to ocean views,enjoy  spa treatment , and end your  days with sunset dinners on the beach . Perfect for couples and honeymooners </p>
                    <p className='mb-3 md:font-bold hidden md:block'>Unwind in paradise with turquoise water and private beach access. Wake up to ocean views,enjoy  spa treatment , and end your  days with sunset dinners on the beach . Perfect for couples and honeymooners </p>
                    <p className='mb-3 md:font-bold hidden md:block'>Unwind in paradise with turquoise water and private beach access. Wake up to ocean views,enjoy  spa treatment , and end your  days with sunset dinners on the beach . Perfect for couples and honeymooners </p>
                      <span className='mb-3 font-medium text-orange-500 text-2xl'>#1,850,000 per person</span>
                 </div>

                
               </div>

             


           <div className='justify-between flex items-center w-full ' >

                 <div className='m-9'>
                    <h1 className='text-3xl font-bold mb-10'>Paris Romance City Gateway</h1>
                    <p className='mb-3 md:font-bold '>Eiffel Tower, museums, and Cafe cultures</p>
                    <p className='mb-3 md:font-bold '>Explore the city of love. Visit iconic landmarks, shop on champs-Elyseees, and enjoy gourment french cuisine, including guiding tours and skip-the-line tickets so you spend less time queuring and more time exploring</p>
                    <p className='mb-3 md:font-bold hidden md:block'>Explore the city of love. Visit iconic landmarks, shop on champs-Elyseees, and enjoy gourment french cuisine, including guiding tours and skip-the-line tickets so you spend less time queuring and more time exploring</p>
                    <p className='mb-3 md:font-bold  hidden md:block'>Explore the city of love. Visit iconic landmarks, shop on champs-Elyseees, and enjoy gourment french cuisine, including guiding tours and skip-the-line tickets so you spend less time queuring and more time exploring</p>
                      <span className='mb-3 font-medium text-orange-500 text-2xl'>#1,450,000 per person</span>
                   </div>
                     

                   <div>
                    <img   className='p-3 border rounded-full mr-10 mb-6' src={Boat} alt=""/>
                     </div>
                
                 </div>


                  <div className='justify-between flex items-center w-full ' >

                    <div>
                     <img   className='p-3 border rounded-full mr-10 mb-6' src={Desert} alt=""/>
                      </div>

                       <div className='m-9'>
                        <h1 className='text-3xl font-bold mb-10'>East Africa Safari Adventure</h1>
                        <p className='mb-3 md:font-bold '>Lions, Elehants, and the Great Milgration</p>
                        <p className='mb-3 md:font-bold '>Experience the wild like never before. Track the big 5 in Serengeti and Maasia Mara. Stay in luxury tents,go on  sunrise game drives, and learn from local guide. A once-in-a-lifetime adventure</p>
                        <p className='mb-3 md:font-bold hidden md:block'>Experience the wild like never before. Track the big 5 in Serengeti and Maasia Mara. Stay in luxury tents,go on  sunrise game drives, and learn from local guide. A once-in-a-lifetime adventure</p>
                        <p className='mb-3 md:font-bold hidden md:block'>Experience the wild like never before. Track the big 5 in Serengeti and Maasia Mara. Stay in luxury tents,go on  sunrise game drives, and learn from local guide. A once-in-a-lifetime adventure</p>
                        <span className='mb-3 font-medium text-orange-500 text-2xl'>#2,100,000 per person</span>
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

export default Package


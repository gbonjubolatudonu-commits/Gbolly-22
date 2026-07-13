import React from 'react';
import Content from './Content';
import { Globe, Plane, Menu } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../lib/context';
import supabase from '../lib/supabase';
import { DOMVisualElement } from 'framer-motion';
// import Contentimg from './Contentimg';


// const getUserInitial = (user) => {
//   const name = user?.user_metadata?.full_name || user?.email || '';
//   const segments = name.split(/[@.\s]+/).filter(Boolean);
//   if (segments.length === 0) return '';
//   if (segments.length === 1) return segments[0].slice(0,2).toUpperCase();
//   return `${segments[0][0]}${segments[1][0]}`. toUpperCase();
// }

function Header() {
     const navigate = useNavigate();
     const [isOpen, setIsOpen] = useState(false)
    //  const [isLoggingOut, setIsLoggingOut] = useState(false);
    //  const {user} = useAuth();

 
    //  const handleLogout = async () => {
    //   setIsLoggingOut (true);
    //   try{
    //     await supabase.auth.signOut();
    //     navigate('/login');
    //   } catch (error){
    //     console.warn('Error signing out', error);
    //   }finally{
    //     setIsLoggingOut(false)
    //   }
    //  };

  return (
    <div>
      <div className='flex justify-between items-center  bg-blue-950 p-3'>
        <div className='flex justify-center items-center'>
          <Plane  className='text-amber-600 cursor-pointer hover:text-amber-200' size={50}/>
            <h1 href="/" className='text-3xl font-bold text-white m-5'>TUDOS</h1>
          </div>

            <div className='hidden md:block'>
              <div className='ml-7 items-stretch justify-between' >
                <ul className='md:flex text-white items-center gap-10 font-bold ml-5 '>
                       <NavLink to='/Package' className={({isActive}) => 
                        `hover:text-amber-200 text-white transition  border-b border-white  rounded-full duration-200 ease-in font-bold ${isActive ? 'text-white font-bold text-2xl' :""}`
                       }>Flight</NavLink> 
                       
                          <NavLink to='/Hotel' className={({isActive}) =>
                            `hover:text-amber-200 text-white transition border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                        }>Hotel</NavLink>
      
                          <NavLink to='/Package' className={({isActive}) =>
                            `hover:text-amber-200 text-white transition  border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                      }>Cars</NavLink>
                               <NavLink to='/Hotel' className={({isActive}) =>
                             `hover:text-amber-200 text-white transition  border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                        }>package</NavLink>

                           <NavLink to='/Package' className={({isActive}) =>
                             `hover:text-amber-200 text-white transition  border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                        }>Deals</NavLink>
                </ul>
              </div>
            </div>
                {/* <Globe  className='text-white'/> */}
                <div className='hidden md:block'>
                  <div className='flex justify-center items-center' >
                    <button className='border rounded-full mr-2 px-4 bg-orange-500  text-white cursor-pointer p-2 mt-3 hover:text-white hover:bg-orange-300 mb-2 md:justify-end '>Sign up</button>
                     <button className='border rounded-full mr-2 px-4 bg-orange-500  text-white cursor-pointer p-2 mt-3 hover:bg-orange-300 hover:text-white mb-2 md:justify-end '>Login</button>
              </div>
                </div>

                {/* <div>
                  {user ? (
                    <div className='hidden item-center gap-3  md:flex'>
                       <div className='flex h-11 w-11 items-center justify-center rounded-full bg-blue-600
                           text-sm font-semibold text-white shadow-lg shadow-blue-500/20'>
                        {getUserInitial(user)}
                       </div>

                       <button 
                       onClick={handleLogout}
                       disabled={isLoggingOut}
                       className='rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold 
                           text-blue-600 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60'
                        >
                        {isLoggingOut ? 'signing out ...' :'Logout'}
                       </button>
                    </div>
                  ) : (
                     
                    <div className='hidden item-center gap-3 md:flex'>

                      <button 
                      onClick={() => navigate ('/login')}
                      className='rounded-full border border-slate-300 bg-white 
                      px-4 py-2 text-sm font-semibold text-blue-600 transition  hover:bg-emerald-50'
                      >
                          Login
                      </button>

                      <button 
                      onClick={() => navigate('/register')}
                      className='rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white 
                           shadow-lg shadow-emerald-500/20 transition hover:bg-blue-500'
                      >
                        Create Account 
                      </button>
                    </div>
                  
                )}
                </div> */}
     

             <button className='md:hidden block text-white  cursor-pointer focus:outline-none ' onClick={() => setIsOpen(!isOpen) }>
            {isOpen ? <Menu /> : <Menu />}
           </button>
      </div>
     

    {isOpen && (
      <div className='absolute right-0 w-100 shadow-md  p-8 md:hidden block-8   cursor-pointer rounded-full'>
                        <div className=' bg-blue-950'>
                        <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full '>Flight</p>
                        <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white rounded-full'>Hotel</p>
                         <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl  ease-in-out border-b border-white  rounded-full'>Cars</p>
                         <p className= 'text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Packages</p>
                         <p className= 'text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Deals</p>
                         <button className='border rounded-full mr-2 px-4 bg-orange-500  text-white cursor-pointer p-2 mt-3 hover:text-white hover:bg-orange-300 mb-2 md:justify-end '>Sign up</button>
                         <button className='border rounded-full mr-2 px-4 bg-orange-500  text-white cursor-pointer p-2 mt-3 hover:bg-orange-300 hover:text-white mb-2 md:justify-end '>Login</button>

                         </div>
                      </div>
                      )}

         <Content />
      {/* <Contentimg /> */}
     </div>
  )
}

export default Header












// import { div } from 'framer-motion/client';
// import { Globe, MessageCircle, Plane, Search, ShoppingCart, User } from 'lucide-react';
// import React, { useState } from 'react'
// import { Navigate, useNavigate,NavLink } from 'react-router-dom'
// import { Menu } from 'lucide-react';
// // import Content from './Content'; 


// function Header() {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div>
//         <div className='flex justify-between items-center gap-4 bg-amber-500  '>

//          <button className='md:hidden block text-white cursor-pointer ' onClick={() => setIsOpen(!isOpen)}>
//                        {isOpen ? <Menu /> : <Menu />}
//                        </button>

//                    <div className='flex justify-center items-center'>
//                     <Plane  className='text-white cursor-pointer hover:text-amber-200' size={50}/>
//                       <a href="/" className='text-3xl font-bold text-white m-5'>TUDOS </a>
//                    </div>
          
//                     <div className='hidden md:block'>
//                     <div className='ml-7 items-center justify-between  mt-3 '> 

//                        <div className='md:flex text-white items-center gap-10 font-bold ml-5'> 
//                          <NavLink to='/men' className={({isActive}) => 
//                            `hover:text-white text-white transition duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
//                         }>Flight</NavLink> 
                       
//                           <NavLink to='/men' className={({isActive}) =>
//                             `hover:text-white text-white transition duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
//                         }>Hotel</NavLink>
      
//                           <NavLink to='/men' className={({isActive}) =>
//                             `hover:text-white text-white transition duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
//                         }>Cars</NavLink>
      
//                          <NavLink to='/men' className={({isActive}) =>
//                             `hover:text-white text-white transition duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
//                         }>package</NavLink>

//                           <NavLink to='/men' className={({isActive}) =>
//                             `hover:text-white text-white transition duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
//                         }>Deals</NavLink>
                        

//                        <button>Login</button>
//                         <button>Sign up</button>
//                      </div>
//                         </div>
                      
//                    </div>
//                        <div className='hidden md:block'>
//                           <div className='flex gap-4 m-3 text-white cursor-pointer' >
//                             <Globe />
//                             <div>
//                              <a href="https://wa.me/2347063635379" className='fixed bottom-24 right-6 z-200
//                               bg-green-500 text-white p-4 rounded-full shadow-2xl  hover:scale-110 transition-transform'>
//                              <MessageCircle />
//                              <span className='absolute -top-2 -left-2  bg-red-500 text-{10px} px-2 py-1 rounded-full animate-bounce'>help?</span>
//                              </a> 
//                             </div>
//                          </div>
//                         </div>
//                         {/* <a 
//        href="https://wa.me/2347063685379" 
//          className='fixed bottom-24 right-6 z-200 bg-green-500 text-white p-4 rounded-full shawdow-2x1 hover:scale-110 transition-transform'
//        > 
//         <MessageCircle size={28} />
//         <span className='absolute -top-2 -left-2 bg-red-500 text-{10px} px-2 py-1 rounded-full animate-bounce'>
//             help?
//         </span>
//        </a> */}
//                   {/* <div className='--gray-300 rounded-full bg-gray-400 text-white w-3/5 flex justify-between items-center py-2 px-2 md:py-3 md:px-7'>
                       
//                         <input
//                           type="text"
//                           placeholder='Enter product' 
//                           className='outline-none text-white ml-2 '
//                          />
//                 <Search />
//                   </div> */}
                  
                    
//        </div>

//                   {isOpen && (
//                       <div className='absolute left-0 w-100 shadow-md  p-8 md:hidden block-8   cursor-pointer rounded-full'>
//                         <div className=' bg-amber-500'>
//                         <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full '>Flight</p>
//                         <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white rounded-full'>Hotel</p>
//                         <p className='text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl  ease-in-out border-b border-white  rounded-full'>Cars</p>
//                         <p className= 'text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Packages</p>
//                         <p className= 'text-white p-1 ml-3 hover:bg-amber-300 transition-all text-2xl ease-in-out border-b border-white  rounded-full'>Deals</p>
                     
//                          <div className='flex gap-4 m-3 text-white cursor-pointer' >
//                           <User  size={40}/>
//                           <ShoppingCart size={40}/>
//                       </div>

//                         </div>
//                      </div>
//                   )}

//        {/* <Content /> */}
//     </div>
//   )
// }

// export default Header


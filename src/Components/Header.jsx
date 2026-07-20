import React from 'react';
import Content from './Content';
import { Globe, Plane, Menu } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../lib/context';
import supabase from '../lib/supabase';
// import { DOMVisualElement } from 'framer-motion';
// import Contentimg from './Contentimg';


const getUserInitial = (user) => {
  const name = user?.user_metadata?.full_name || user?.email || '';
  const segments = name.split(/[@.\s]+/).filter(Boolean);
  if (segments.length === 0) return '';
  if (segments.length === 1) return segments[0].slice(0,2).toUpperCase();
  return `${segments[0][0]}${segments[1][0]}`. toUpperCase();
}

function Header() {
     const navigate = useNavigate();
     const [isOpen, setIsOpen] = useState(false)
     const [isLoggingOut, setIsLoggingOut] = useState(false);
     const { user } = useAuth() || {};

     const toggleMenu = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setIsOpen((prev) => !prev);
     };

  
     const handleLogout = async () => {
      setIsLoggingOut (true);
      try{
        await supabase.auth.signOut();
        navigate('/login');
      } catch (error){
        console.warn('Error signing out', error);
      }finally{
        setIsLoggingOut(false)
      }
     };

  return (
    <div>
      <div className='relative z-200 flex justify-between items-center bg-blue-950 p-3'>
        <div className='flex justify-center items-center'>
          <Plane  className='text-amber-600 cursor-pointer hover:text-amber-200' size={50}/>
            <h1 href="/" className='text-3xl font-bold text-white m-5'>TUDOS</h1>
          </div>

            <div className='hidden md:block'>
              <div className='ml-7 items-stretch justify-between' >
                <ul className='md:flex text-white items-center gap-10 font-bold ml-5 '>
                       <NavLink to='/Package' className={({isActive}) => 
                        `hover:text-amber-200 text-white transition  hover:underline underline-offset-4 border-b border-white  rounded-full duration-200 ease-in font-bold ${isActive ? 'text-white font-bold text-2xl' :""}`
                       }>Flight</NavLink> 
                       
                          <NavLink to='/Hotel' className={({isActive}) =>
                            `hover:text-amber-200 text-white transition hover:underline underline-offset-4 border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                        }>Hotel</NavLink>
      
                          <NavLink to='/Package' className={({isActive}) =>
                            `hover:text-amber-200 text-white transition  hover:underline underline-offset-4  border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                      }>Cars</NavLink>
                               <NavLink to='/Hotel' className={({isActive}) =>
                             `hover:text-amber-200 text-white transition hover:underline underline-offset-4 border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                        }>package</NavLink>

                           <NavLink to='/Package' className={({isActive}) =>
                             `hover:text-amber-200 text-white transition  border-b border-white  rounded-full duration-200 ease-in ${isActive ? 'text-white font-bold text-xl' :""}`
                        }>Deals</NavLink>
                </ul>
              </div>
            </div>
                {/* <Globe  className='text-white'/> */}
                {/* <div className='hidden md:block'>
                  <div className='flex justify-center items-center' >
                    <button className='border rounded-full mr-2 px-4 bg-orange-500  text-white cursor-pointer p-2 mt-3 hover:text-white hover:bg-orange-300 mb-2 md:justify-end '>Sign up</button>
                     <button className='border rounded-full mr-2 px-4 bg-orange-500  text-white cursor-pointer p-2 mt-3 hover:bg-orange-300 hover:text-white mb-2 md:justify-end '>Login</button>
              </div>
                </div> */}

                <div>
                  {user ? (
                    <div className='hidden item-center gap-3  md:flex'>
                       <div className='flex h-11 w-11 items-center justify-center rounded-full bg-blue-700
                           text-sm font-semibold text-white shadow-lg shadow-blue-500/20'>
                        {getUserInitial(user)}
                       </div>

                       <button 
                       onClick={handleLogout}
                       disabled={isLoggingOut}
                       className='rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold 
                           text-blue-600 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60'
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
                           shadow-lg shadow-emerald-500/20 transition hover:bg-blue-800'
                      >
                        Create Account 
                      </button>
                    </div>
                  
                )}
                </div>
     

             <button
              type='button'
              aria-label='Toggle navigation menu'
              className='relative z-220 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none md:hidden'
              onClick={toggleMenu}
              // onPointerDown={toggleMenu}
            >
              <Menu size={28} />
            </button>
      </div>
     

    {isOpen && (
      <div className='fixed inset-x-0 top-20 -right-2 z-300 w-72 rounded-b-xl bg-blue-950 p-4 shadow-lg md:hidden'>
        <div className='flex flex-col gap-2'>
                                           {/* rounded-full border border-slate-300 bg-white  px-4 py-2 text-sm font-semibold text-blue-600 transition  hover:bg-emerald-50 */}
          <NavLink to='/Package' onClick={() => setIsOpen(false)} className='rounded-full border-b border-white px-3 py-2 text-left text-2xl text-white transition hover:bg-amber-300 hover:text-blue-950'>Flight</NavLink>
          <NavLink to='/Hotel' onClick={() => setIsOpen(false)} className='rounded-full border-b border-white px-3 py-2 text-left text-2xl text-white transition hover:bg-amber-300 hover:text-blue-950'>Hotel</NavLink>
          <NavLink to='/Package' onClick={() => setIsOpen(false)} className='rounded-full border-b border-white px-3 py-2 text-left text-2xl text-white transition hover:bg-amber-300 hover:text-blue-950'>Cars</NavLink>
          <NavLink to='/Hotel' onClick={() => setIsOpen(false)} className='rounded-full border-b border-white px-3 py-2 text-left text-2xl text-white transition hover:bg-amber-300 hover:text-blue-950'>Packages</NavLink>
          <NavLink to='/Package' onClick={() => setIsOpen(false)} className='rounded-full border-b border-white px-3 py-2 text-left text-2xl text-white transition hover:bg-amber-300 hover:text-blue-950'>Deals</NavLink>
          
          <div className='flex justify-center items-center m-2'>
             <button type='button' onClick={() => { setIsOpen(false); navigate('/register'); }} className='mt-2 rounded-full border border-orange-400 bg-orange-500 px-4 py-2 text-left text-white transition hover:bg-orange-300 mr-2'>Sign up</button>
             <button type='button' onClick={() => { setIsOpen(false); navigate('/login'); }} className='rounded-full border mr-2 border-white bg-transparent px-4 py-2 text-left text-white transition hover:bg-white hover:text-blue-950'>Login</button>
          </div>
                                                                            {/*  mr-2 px-4 bg-orange-500  text-white cursor-pointer p-2 mt-3 hover:text-white hover:bg-orange-300 mb-2 md:justify-end */}
        </div>

      </div>
    )}

         <Content />
      {/* <Contentimg /> */}
     </div>
  )
}

export default Header;

// const BurgerNav = Styled.div`
// top:0;
// right:0;
// bottom: 0;
// padding:20px;
// transform: ${(props)}


// `


import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import {supabase} from'../lib/supabase'

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const[form, setForm] = useState({
        email: '',
        password: ''
    })


    async function handleLogin(event) {
        event.preventDefault()

        if(!form.email || !form.password){
          window.alert('please fill in all fields')
          return
        }
        
        setLoading(true);
      const { data: authData, error} = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      setLoading(false);

      if (error) {
        window.alert(`Login Error: ${error.message} ||'Login failed'}`);
        return
      }
      navigate('/')
    }
  return (
    <div className=' flex h-fit mt-20  justify-center items-center '>
      <div className='bg-white border-blue-600 shadow-md w-2/5 md:-2/5'>
         <h2 className='text-black font-semibold text-4xl text-center mt-8'>Welcome back</h2>
          <h2 className='text-black font-semibold text-2xl text-center '>Log in </h2>

             <form className='p-4' onSubmit={handleLogin}>
              <div className='p-5'>
               <input
               className='border border-gray-500 rounded-md p-2 w-11/12 
                       outline-none pl-4 items-center flex justify-center mx-auto mb-4'
                type="email"
               placeholder='Enter your Email Address.....'
               value={form.email}
               onChange={(e) => setForm({...form,email: e.target.value})}
               required
                />

                 <input
               className='border border-gray-500 rounded-md p-2 w-11/12 
                       outline-none pl-4 items-center flex justify-center mx-auto mb-4'
                type="password"
               placeholder='Enter your password.....'
               value={form.password}
               onChange={(e) => setForm({...form,password: e.target.value})}
               required
                />
                   <button disabled={loading} className='p-2 text-center rounded-md mt-4 ml-4 w-11/12 bg-blue-600 text-white font-semibold
                    mx-auto cursor-pointer hover:bg-blue-700 transition-all ease-in-out mb-4'>{loading ? 'Logging in...' : 'Log In'}</button>
                <p className='text-center flex justify-center gap-1 font-semibold mb-2'>Don't have an account?<span onClick={() => navigate('/register')} className='text-blue-600 cursor-pointer hover:text-blue-700'>Sign up</span></p>
              </div>
           </form>
       </div>
    </div>
  )
}

export default Login

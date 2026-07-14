import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {supabase} from '../lib/supabase'
import Paris from '../assets/Paris.jpg'

function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
      name:'',
      password:'',
      email:''
    })
    async function handleRegister(event){
     event.preventDefault();

     if(!form.name || !form.email|| !form.password ){
        window.alert('please fill in all fields')
        return
     }
      const {data, error} = await supabase.auth.signUp({
        email: form.email,
        password: form.password
      })


         if (error){
          window.alert(`signUp Error: ${error.message}`);
         return;
       }

       const userId = data?.user?.id;
      if (!userId){
        window.alert('user ID not found after signup');
        return;
      }

      const { error:profileError } = await supabase.from('class').insert([
        {
         id: userId,
         email: form.email,
          name: form.name,
      }
    ])
      if(profileError){
        window.alert(`profile Error: ${profileError.message}`);
        return;
      }
      navigate('/')
    }
  return ( 
    <div className='flex justify-center items-center h-fit mt-20'>
      {/* <div className='relative h-112.5 bg-cover  bg-center'>
        <img src={Paris} alt="" />
      </div> */}
       <div className='bg-white border-gray-300 shadow-md w-2/5'>
        <h2 className='text-black font-bold text-4xl text-center mt-8'>Create Account</h2>
        <h2 className='text-black font-semibold text-md text-center'>Sign up to get started</h2>

        <form className='p-4' onSubmit={handleRegister}>

        <div className='p-4 '>

         
          <input 
           className='border border-gray-400 rounded-md p-2 w-11/12 outline-none pl-4 items-center flex justify-center mx-auto mb-4'
           type="text" 
           placeholder='Enter your Name...'
           value={form.name}
           onChange={(e) => setForm({...form, name: e.target.value})}
           required
         />

        <input 
        className='border border-gray-400 rounded-md p-2 w-11/12 outline-none pl-4 items-center flex justify-center mx-auto mb-4'
        type="email" 
        placeholder='Enter your Email Address...'
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}
        required
        />

        <input 
           className='border border-gray-400 rounded-md p-2 w-11/12 outline-none pl-4 items-center flex justify-center mx-auto mb-4'
           type="password" 
           placeholder='Enter your password ....'
           value={form.password}
           onChange={(e) => setForm({...form, password: e.target.value})}
           required
        />

         <button type="submit" disabled={loading} className='p-2 text-center rounded-md mt-4  w-11/12 bg-blue-600 text-white font-semibold  mx-auto hover:bg-blue-700 transition-all ease-in-out mb-4 ml-4'>
            {loading ? 'Creating account...' : 'Create account'}
         </button>
            <p className='text-center flex justify-center gap-1 font-semibold mb-2'>Already have an account?<span onClick={() => navigate('/login')} className='text-blue-600 cursor-pointer hover:text-blue-700'>Log in!</span></p>
        
           </div>
         </form>
      </div>
    </div>
   )
  }
export default Register

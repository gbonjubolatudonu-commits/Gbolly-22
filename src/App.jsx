import React  from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './Components/Header'
import Package from './Components/Package'
import Contentimg from './Components/Contentimg'
import Login from './Components/Login'
import Register from './Components/Register'
import Hotel from './Components/Hotel'
// import { AuthProvider, useAuth } from './lib/context'


// const PrivateRoute =({Children}) =>{
//   const {user, loading} = useAuth();

//   if (loading){
//     return
//   }
//   if(!user) {
//     return <Navigate to= '/login' replace />
//   }
//   return Children
// }

function App() {
  return (
    <>
    {/* <AuthProvider > */}
      <Routes>
        <Route path='/' element={<><Header /><Contentimg /></>} />
        <Route path='/Package' element={<Package />} />
        <Route path='/Hotel' element={<Hotel />} />
        <Route path='/Login' element={<Login  />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Content' element={<><Header /><Contentimg /></>} />
      </Routes>
    {/* </AuthProvider> */}
    </>
  )
}

export default App

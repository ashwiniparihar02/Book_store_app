import React from 'react'
import Home from './home/Home'
// import Course from './component/Course'
import Courses from './courses/Courses'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Contact from './component/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const[authUser,setAuthUser]=useAuth();
  return (
   <>
   
   <div className='dark:bg-slate-700 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Toaster />
   </div>
   </>
  )
}

export default App
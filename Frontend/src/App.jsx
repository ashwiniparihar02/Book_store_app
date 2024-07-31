import React from 'react'
import Home from './home/Home'
// import Course from './component/Course'
import Courses from './courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Contact from './component/Contact'

function App() {
  return (
   <>
   
   <div className='dark:bg-slate-700 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App
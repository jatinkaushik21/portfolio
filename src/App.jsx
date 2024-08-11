import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
 import Projects from './Components/projects'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import { Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    
    <div className='overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:cyan-900'>
      <div className='fixed  top-0 w-full -z-10 h-full '>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-br from-[#000] via-[#000]  to-[#fd0075] "></div>
      </div>
    
      <div className='container mx-auto px-8'>

      <Navbar/>
     <Routes>
    <Route path="/" element={<Hero />} /> 
    <Route path="/AboutUs" element={<AboutUs/>} /> 
     </Routes>
      <Contact/>
      </div>
    </div>
  )
}

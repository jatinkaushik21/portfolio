import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
 import Projects from './Components/projects'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import Navbar2 from './Components/Navbar2'
import Team from './Components/OurTeam'
import { Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    
    <div className='overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:cyan-900'>
      <div className='fixed  top-0 w-full -z-10 h-full '>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-br from-[#000] via-[#000]  to-[#fd0075] "></div>
      </div>
      <Navbar2/>
      <div className='container mx-auto px-8'>

     <Routes>
    <Route path="" element={<Hero />} /> 
    <Route path="/AboutUs" element={<AboutUs/>} /> 
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/experience" element={<Experience/>} />
    <Route path="/Team" element={<Team/>} />
     </Routes>
      </div>
      <Footer/>
    </div>
  )
}

import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards"

const Landing = () => {
  return (
    <div  className="bg-[#0d1117] scrollbar-hide">
    <div className="relative">
    
    
    <div className='h-[100vh] w-full relative'>
        <div className='absolute top-0 w-[inherit] h-[inherit] bg-gradient-to-b from-[rgba(36,42,46,0.8)] to-[rgba(36,42,46,0.8)]'>
        </div>
        <img src={"./src/assets/image.png"} className='h-[100vh] w-full'  />
    </div>
    <Cards />
    
  </div>
  </div>
  )

}

export default Landing
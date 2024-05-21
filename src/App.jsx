import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300  seleccion:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className='container mx-auto px-8'>
          <Navbar/>
          <Hero/>
          <About/>
        </div>
      </div>
      
    </div>
  )
}

export default App

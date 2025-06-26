import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard } from 'lucide-react'
import ParticleTextEffect from '../components/ParticleTextEffect'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-black relative">
      <Navbar />
      
      {/* Mobile Dashboard Button */}
      <Link 
        to="/dashboard"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-white/20 backdrop-blur-sm border border-white/40 rounded-full p-4 hover:bg-white/30 transition-all duration-300 group shadow-xl"
      >
        <LayoutDashboard 
          size={24} 
          className="text-white group-hover:scale-110 transition-all" 
        />
        <span className="sr-only">Dashboard</span>
      </Link>
      
      <ParticleTextEffect words={["Call","Me","Maybe"]} />
    </div>
  )
}

export default Landing
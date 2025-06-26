import React from 'react'
import ParticleTextEffect from '../components/ParticleTextEffect'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <ParticleTextEffect words={["Call","Me","Maybe"]} />
    </div>
  )
}

export default Landing
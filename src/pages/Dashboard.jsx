import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Plus, LogIn } from 'lucide-react'
import Navbar from '../components/Navbar'
import SpotlightCard from '../components/ui/spotlight-card'

const Dashboard = () => {
  const [roomCode, setRoomCode] = useState('')
  const navigate = useNavigate()

  const handleCreateRoom = () => {
    const newRoomCode = Math.random().toString(36).substring(2, 8).toUpperCase()
    navigate(`/room/${newRoomCode}`)
  }

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      navigate(`/room/${roomCode.toUpperCase()}`)
    }
  }

  const handlePrivateChat = () => {
    navigate('/private-chat')
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navbar />
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-l from-white/10 to-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 pt-32 sm:pt-40 lg:pt-48 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2 max-w-5xl mx-auto">
          <SpotlightCard
            className="w-full h-[32rem] sm:h-[32rem] group scale-75 flex flex-col items-center justify-between p-8 sm:p-10"
            onClick={handleCreateRoom}
            spotlightColor="rgba(34, 197, 94, 0.15)"
          >
            <div className="flex flex-col items-center flex-1 justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-8 text-white/80 group-hover:text-green-400 transition-all duration-500 group-hover:scale-110">
                <Plus size={80} strokeWidth={1.2} className="sm:w-24 sm:h-24" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 tracking-[0.2em] group-hover:text-green-100 transition-colors">
                CREATE ROOM
              </h3>
              <p className="text-gray-400 text-center text-base sm:text-lg leading-relaxed group-hover:text-gray-300 transition-colors max-w-xs">
                Start a new video room and invite others to join your call
              </p>
            </div>
            <div className="w-full max-w-xs">
              <div className="w-full px-8 py-4 border border-white/20 rounded-2xl text-sm sm:text-base tracking-[0.15em] group-hover:border-green-400/50 group-hover:bg-green-400/5 transition-all duration-300 text-white text-center font-light">
                CREATE ROOM
              </div>
            </div>
          </SpotlightCard>
          
          <SpotlightCard
            className="w-full h-[32rem] sm:h-[32rem] group scale-75 flex flex-col items-center justify-between p-8 sm:p-10"
            onClick={() => roomCode.trim() && handleJoinRoom()}
            spotlightColor="rgba(168, 85, 247, 0.15)"
          >
            <div className="flex flex-col items-center flex-1 justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-8 text-white/80 group-hover:text-purple-400 transition-all duration-500 group-hover:scale-110">
                <LogIn size={80} strokeWidth={1.2} className="sm:w-24 sm:h-24" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 tracking-[0.2em] group-hover:text-purple-100 transition-colors">
                JOIN ROOM
              </h3>
              <p className="text-gray-400 text-center text-base sm:text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors max-w-xs">
                Enter a room code to join an existing video call
              </p>
            </div>
            <div className="w-full max-w-xs space-y-6">
              <input
                type="text"
                placeholder="ENTER ROOM CODE"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && roomCode.trim() && handleJoinRoom()}
                className="w-full px-6 py-4 bg-white/5 text-white rounded-2xl border border-white/20 focus:border-purple-400/50 focus:outline-none focus:bg-white/10 text-center tracking-[0.15em] placeholder:text-gray-500 font-light transition-all text-base sm:text-lg backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="w-full px-8 py-4 border border-white/20 rounded-2xl text-sm sm:text-base tracking-[0.15em] group-hover:border-purple-400/50 group-hover:bg-purple-400/5 transition-all duration-300 text-white text-center font-light">
                JOIN ROOM
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

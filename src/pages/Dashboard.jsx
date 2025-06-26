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
      
      <div className="relative z-10 pt-64 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SpotlightCard
            className="w-full h-80 group"
            onClick={handlePrivateChat}
            spotlightColor="rgba(59, 130, 246, 0.15)"
          >
            <div className="w-16 h-16 mb-6 text-white/90 group-hover:text-blue-400 transition-colors duration-300">
              <MessageCircle size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-light text-white mb-4 tracking-wider group-hover:text-blue-100 transition-colors">
              PRIVATE CHAT
            </h3>
            <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors">
              Start a secure one-on-one conversation with end-to-end encryption
            </p>
            <div className="mt-6 px-6 py-2 border border-white/20 rounded-full text-sm tracking-wider group-hover:border-blue-400/50 transition-colors">
              START CHAT
            </div>
          </SpotlightCard>
          
          <SpotlightCard
            className="w-full h-80 group"
            onClick={handleCreateRoom}
            spotlightColor="rgba(34, 197, 94, 0.15)"
          >
            <div className="w-16 h-16 mb-6 text-white/90 group-hover:text-green-400 transition-colors duration-300">
              <Plus size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-light text-white mb-4 tracking-wider group-hover:text-green-100 transition-colors">
              CREATE ROOM
            </h3>
            <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors">
              Start a new video room and invite others to join your call
            </p>
            <div className="mt-6 px-6 py-2 border border-white/20 rounded-full text-sm tracking-wider group-hover:border-green-400/50 transition-colors">
              CREATE ROOM
            </div>
          </SpotlightCard>
          
          <SpotlightCard
            className="w-full h-80 group"
            onClick={() => roomCode.trim() && handleJoinRoom()}
            spotlightColor="rgba(168, 85, 247, 0.15)"
          >
            <div className="w-16 h-16 mb-6 text-white/90 group-hover:text-purple-400 transition-colors duration-300">
              <LogIn size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-light text-white mb-4 tracking-wider group-hover:text-purple-100 transition-colors">
              JOIN ROOM
            </h3>
            <p className="text-gray-400 text-center leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
              Enter a room code to join an existing video call
            </p>
            <input
              type="text"
              placeholder="ENTER ROOM CODE"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && roomCode.trim() && handleJoinRoom()}
              className="w-full px-4 py-3 bg-white/5 text-white rounded-xl border border-white/20 focus:border-purple-400/50 focus:outline-none text-center tracking-widest placeholder:text-gray-500 font-light transition-all"
              onClick={(e) => e.stopPropagation()}
            />
          </SpotlightCard>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

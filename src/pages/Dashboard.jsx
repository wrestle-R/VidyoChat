import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Plus, LogIn, User, LogOut } from 'lucide-react'
import Navbar from '../components/Navbar'
import SpotlightCard from '../components/ui/spotlight-card'

// Import Firebase auth from config
import { auth, googleProvider } from '../config/firebase.config'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const API_BASE_URL = import.meta.env.VITE_API_URL

const Dashboard = () => {
  const [roomCode, setRoomCode] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [connectionStatus, setConnectionStatus] = useState('checking')
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  // Check backend connectivity on component mount
  useEffect(() => {
    const checkBackendConnection = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/health`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (response.ok) {
          const data = await response.json()
          setConnectionStatus('connected')
          console.log('Backend connection successful:', data)
        } else {
          setConnectionStatus('error')
          setError('Backend server is not responding properly')
        }
      } catch (error) {
        console.error('Backend connection failed:', error)
        setConnectionStatus('error')
        setError(`Cannot connect to server`)
      }
    }

    checkBackendConnection()
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      setError('')
      const result = await signInWithPopup(auth, googleProvider)
      setUser(result.user)
    } catch (error) {
      console.error('Sign in error:', error)
      setError('Failed to sign in with Google')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const handleCreateRoom = async () => {
    if (!user) {
      setError('Please sign in to create a room')
      return
    }

    if (connectionStatus !== 'connected') {
      setError('Backend server is not available. Please try again later.')
      return
    }

    try {
      setLoading(true)
      setError('')
      
      console.log('Creating room for user:', { name: user.displayName, email: user.email })
      
      const response = await fetch(`${API_BASE_URL}/api/create-room`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: user.displayName || user.email || 'Anonymous User',
          userEmail: user.email || ''
        })
      })

      console.log('Create room response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('Create room response data:', data)

      if (data.success && data.joinUrl) {
        // Show room code to user before opening
        alert(`Room created successfully!\n\nRoom Code: ${data.roomId}\n\nShare this code with others to join your room.`)
        // Open Digital Samba room in new tab
        window.open(data.joinUrl, '_blank', 'noopener,noreferrer')
      } else {
        setError(data.error || data.message || 'Failed to create room - no join URL received')
      }
    } catch (error) {
      console.error('Create room error:', error)
      setError(`Failed to create room: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleJoinRoom = async () => {
    if (!user) {
      setError('Please sign in to join a room')
      return
    }

    if (!roomCode.trim()) {
      setError('Please enter a room code')
      return
    }

    if (connectionStatus !== 'connected') {
      setError('Backend server is not available. Please try again later.')
      return
    }

    try {
      setLoading(true)
      setError('')
      
      console.log('Joining room:', roomCode.trim(), 'for user:', { name: user.displayName, email: user.email })
      
      const response = await fetch(`${API_BASE_URL}/api/join-room`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId: roomCode.trim(),
          userName: user.displayName || user.email || 'Anonymous User',
          userEmail: user.email || ''
        })
      })

      console.log('Join room response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('Join room response data:', data)

      if (data.success && data.joinUrl) {
        // Open Digital Samba room in new tab
        window.open(data.joinUrl, '_blank', 'noopener,noreferrer')
        setRoomCode('') // Clear room code after successful join
      } else {
        setError(data.error || data.message || 'Failed to join room - no join URL received')
      }
    } catch (error) {
      console.error('Join room error:', error)
      setError(`Failed to join room: ${error.message}`)
    } finally {
      setLoading(false)
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

        {/* Subtle Connection Indicator */}
        <div className="fixed top-24 right-6 z-50">
          {connectionStatus === 'connected' && (
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          )}
          {connectionStatus === 'error' && (
            <div className="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
          )}
          {connectionStatus === 'checking' && (
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-spin"></div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-md mx-auto mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <p className="text-red-400 text-center">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-2 max-w-5xl mx-auto">
          <SpotlightCard
            className="w-full h-[28rem] sm:h-[32rem] group scale-75 flex flex-col items-center justify-between p-8 sm:p-10"
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
                {user ? 'Start a new video room and invite others to join your call' : 'Sign in to create a video room'}
              </p>
            </div>
            <div className="w-full max-w-xs">
              <div className={`w-full px-8 py-4 border border-white/20 rounded-2xl text-sm sm:text-base tracking-[0.15em] transition-all duration-300 text-white text-center font-light ${
                user && !loading && connectionStatus === 'connected'
                  ? 'group-hover:border-green-400/50 group-hover:bg-green-400/5 cursor-pointer' 
                  : 'opacity-50 cursor-not-allowed'
              }`}>
                {loading ? 'CREATING...' : 'CREATE ROOM'}
              </div>
            </div>
          </SpotlightCard>
          
          <SpotlightCard
            className="w-full h-[28rem] sm:h-[32rem] group scale-75 flex flex-col items-center justify-between p-8 sm:p-10"
            onClick={() => user && roomCode.trim() && !loading && connectionStatus === 'connected' && handleJoinRoom()}
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
                {user ? 'Enter a room code to join an existing video call' : 'Sign in to join a video room'}
              </p>
            </div>
            <div className="w-full max-w-xs space-y-6">
              <input
                type="text"
                placeholder="ENTER ROOM CODE"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && user && roomCode.trim() && !loading && connectionStatus === 'connected' && handleJoinRoom()}
                disabled={!user || loading || connectionStatus !== 'connected'}
                className="w-full px-6 py-4 bg-white/5 text-white rounded-2xl border border-white/20 focus:border-purple-400/50 focus:outline-none focus:bg-white/10 text-center tracking-[0.15em] placeholder:text-gray-500 font-light transition-all text-base sm:text-lg backdrop-blur-sm disabled:opacity-50"
                onClick={(e) => e.stopPropagation()}
              />
              <div className={`w-full px-8 py-4 border border-white/20 rounded-2xl text-sm sm:text-base tracking-[0.15em] transition-all duration-300 text-white text-center font-light ${
                user && roomCode.trim() && !loading && connectionStatus === 'connected'
                  ? 'group-hover:border-purple-400/50 group-hover:bg-purple-400/5 cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }`}>
                {loading ? 'JOINING...' : 'JOIN ROOM'}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

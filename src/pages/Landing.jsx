import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { GooeyText } from "../components/ui/gooey-text-morphing"
import { DotScreenShader } from "../components/ui/dot-shader-background"
import { Play, Heart, Share2, Download, Star, Users, Clock, Github, ExternalLink, Video, MessageCircle } from "lucide-react"

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Dot Background */}
      <div className="fixed inset-0 z-0">
        <DotScreenShader />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-6 border-b border-gray-800">
          <nav className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Video className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">VidyooChat</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                Features
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                Contact
              </a>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Sign In
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-8 bg-blue-500 text-white border-0 px-4 py-2 text-sm font-medium">New Platform</Badge>

            {/* Gooey Text Animation */}
            <div className="h-[200px] flex items-center justify-center mb-8">
              <GooeyText
                texts={["Call", "Me", "Maybe"]}
                morphTime={1.5}
                cooldownTime={1}
                className="font-bold"
                textClassName="text-7xl md:text-9xl font-bold tracking-tight"
              />
            </div>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Experience premium video calling like never before.
              <br />
              Connect with crystal clear quality and seamless communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-400 px-12 py-6 text-lg font-medium rounded-none"
              >
                <Video className="w-6 h-6 mr-3" />
                Start Video Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-medium rounded-none"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Join Chat
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">10M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Users</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">99.9%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Uptime</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">4K</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Quality</div>
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Why Choose <span className="text-blue-500">VidyooChat</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                Discover what makes VidyooChat the preferred choice for millions of users worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 rounded-none">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Premium Quality</h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Crystal clear 4K video calls with advanced noise cancellation for the ultimate communication experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 rounded-none">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Group Calling</h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Connect with up to 100 participants in a single call with seamless performance and reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 rounded-none">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">24/7 Availability</h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Reliable service with 99.9% uptime guarantee. Connect anytime, anywhere with confidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-none">
              <CardContent className="p-12">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                  Ready to <span className="text-blue-500">Connect</span>?
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                  Join millions of users who trust VidyooChat for their video calling needs. Experience the difference today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="bg-blue-500 text-white hover:bg-blue-400 px-12 py-6 text-lg font-medium rounded-none"
                  >
                    <Video className="w-6 h-6 mr-3" />
                    Start Free Call
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-medium rounded-none"
                  >
                    <Download className="w-6 h-6 mr-3" />
                    Download App
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">VidyooChat</span>
              </div>
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Terms
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Support
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-400 font-medium">
                    Created by <span className="text-blue-500 font-bold">Russel Daniel Paul</span>
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <a
                    href="https://github.com/wrestle-R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    <Github className="w-5 h-5" />
                    <span>wrestle-R</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="mt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2024 VidyooChat. All rights reserved. Made with precision and care.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

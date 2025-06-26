import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-3 pb-3">
      <nav className="max-w-4xl mx-auto px-2">
        {/* Main navbar container */}
        <div className="bg-[#080808]/80 backdrop-blur-sm rounded-full border border-white/10 shadow-md">
          <div className="px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-xl">
              VidyoChat
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-6 py-2 bg-transparent text-white border border-white/20 hover:bg-white/5 rounded-full font-medium transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="px-6 py-2 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu - separate container */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-[#080808]/90 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden">
            <div className="px-6 py-4 space-y-3">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 bg-transparent text-white border border-white/20 hover:bg-white/5 rounded-lg font-medium transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="block w-full px-3 py-2 bg-white text-black hover:bg-gray-100 rounded-lg font-medium transition-all text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

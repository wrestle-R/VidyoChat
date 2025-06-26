import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

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
      <nav className="max-w-4xl mx-auto px-2 bg-[#080808]/80 backdrop-blur-sm rounded-full border border-white/10 shadow-md">
        <div className="px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">
            VidyoChat
          </Link>
          <div className="flex items-center gap-8">
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
      </nav>
    </div>
  );
};

export default Navbar;

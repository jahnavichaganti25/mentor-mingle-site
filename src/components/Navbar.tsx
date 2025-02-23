
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { AuthModal } from "./auth/AuthModal";

export const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<"signin" | "signup">("signin");

  const handleAuthClick = (type: "signin" | "signup") => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
              Coursemate
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/placement" className="nav-link">Placement</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => handleAuthClick("signin")}>Sign In</Button>
            <Button onClick={() => handleAuthClick("signup")}>Get Started</Button>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultTab={authType}
      />
    </>
  );
};

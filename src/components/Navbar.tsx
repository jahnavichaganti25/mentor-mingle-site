
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { AuthModal } from "./auth/AuthModal";
import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<"signin" | "signup">("signin");
  const { theme, setTheme } = useTheme();
  
  const handleAuthClick = (type: "signin" | "signup") => {
    setAuthType(type);
    setShowAuthModal(true);
  };
  
  return <>
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 text-purple-500">
              Coursemate
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/placement" className="nav-link">Placement</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" onClick={() => handleAuthClick("signin")}>Sign In</Button>
            <Button onClick={() => handleAuthClick("signup")}>Get Started</Button>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} defaultTab={authType} />
    </>;
};

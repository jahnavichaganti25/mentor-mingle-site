
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/components/profile/UserProfile";
import { ProfileSettings } from "@/components/profile/ProfileSettings";
import { AboutUs } from "@/components/profile/AboutUs";
import { LogOut, User, Settings, Info } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("user-details");
  const { user, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // If still loading, don't render anything yet
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // If not logged in, redirect to homepage
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Profile</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="user-details" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">User Details</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
              <TabsTrigger value="about-us" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span className="hidden sm:inline">About Us</span>
              </TabsTrigger>
              <TabsTrigger value="logout" className="flex items-center gap-2 text-destructive">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="user-details">
              <UserProfile />
            </TabsContent>
            
            <TabsContent value="settings">
              <ProfileSettings />
            </TabsContent>
            
            <TabsContent value="about-us">
              <AboutUs />
            </TabsContent>
            
            <TabsContent value="logout">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h2 className="text-2xl font-semibold mb-4">Are you sure you want to logout?</h2>
                  <p className="text-muted-foreground mb-6">
                    You will be logged out of your account and redirected to the homepage.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" onClick={() => setActiveTab("user-details")}>
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleLogout}>
                      Logout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;

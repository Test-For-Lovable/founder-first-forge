
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already authenticated
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password authentication (in a real app, this would be more secure)
    if (password === 'admin1234') {
      localStorage.setItem('adminAuthenticated', 'true');
      setIsAuthenticated(true);
      toast({
        title: "Authentication successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Authentication failed",
        description: "Please check your password and try again",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-futuristic-dark text-white">
        <NavBar />
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              <span className="text-gradient">Admin Panel</span>
            </h1>
            <Button onClick={handleLogout} variant="outline" className="border-white/20 text-white">
              Logout
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              onClick={() => navigate('/blog-editor')}
              className="h-32 text-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
            >
              Create New Blog Post
            </Button>
            
            <Button 
              onClick={() => navigate('/blog-management')}
              className="h-32 text-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
            >
              Manage Existing Blog Posts
            </Button>

            <Button 
              onClick={() => navigate('/portfolio-editor')}
              className="h-32 text-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
            >
              Create New Portfolio Item
            </Button>
            
            <Button 
              onClick={() => navigate('/portfolio-management')}
              className="h-32 text-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
            >
              Manage Portfolio Items
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient">Admin Login</span>
          </h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Admin Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
                placeholder="Enter your admin password"
                required
              />
              <p className="text-xs text-white/50 mt-2">
                Default password: admin1234
              </p>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;

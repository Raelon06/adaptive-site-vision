
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Vision2025 from "./pages/Vision2025";
import GoalsResults from "./pages/GoalsResults";
import Coaching from "./pages/Coaching";
import AINews from "./pages/AINews";
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";
import RoadMap from "./pages/RoadMap";
import SupervisorNotes from "./pages/SupervisorNotes";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex h-screen w-full items-center justify-center">
      <p>Yükleniyor...</p>
    </div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

// Auth Routes Component - Redirects to home if already logged in
const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex h-screen w-full items-center justify-center">
      <p>Yükleniyor...</p>
    </div>;
  }
  
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
      <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
      
      <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
      <Route path="/2025" element={<ProtectedRoute><Vision2025 /></ProtectedRoute>} />
      <Route path="/roadmap" element={<ProtectedRoute><RoadMap /></ProtectedRoute>} />
      <Route path="/supervisor-notes" element={<ProtectedRoute><SupervisorNotes /></ProtectedRoute>} />
      <Route path="/goals-results" element={<ProtectedRoute><GoalsResults /></ProtectedRoute>} />
      <Route path="/coaching" element={<ProtectedRoute><Coaching /></ProtectedRoute>} />
      <Route path="/ai-news" element={<ProtectedRoute><AINews /></ProtectedRoute>} />
      <Route path="/training" element={<ProtectedRoute><Training /></ProtectedRoute>} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            {mounted ? <AppRoutes /> : <div>Yükleniyor...</div>}
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/2025" element={<Vision2025 />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/supervisor-notes" element={<SupervisorNotes />} />
          <Route path="/goals-results" element={<GoalsResults />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/ai-news" element={<AINews />} />
          <Route path="/training" element={<Training />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

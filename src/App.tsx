import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CiteCastsIndex from "./pages/citecasts/Index";
import InstructorPage from "./pages/citecasts/InstructorPage";
import TutorialPage from "./pages/citecasts/TutorialPage";
import EpisodePage from "./pages/citecasts/EpisodePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* CiteCasts route */}
          <Route path="/citecasts" element={<CiteCastsIndex />} />
          <Route path="/citecasts/:instructorId" element={<InstructorPage />} />
          <Route path="/citecasts/:instructorId/:tutorialId" element={<TutorialPage />} />
          <Route path="/citecasts/:instructorId/:tutorialId/:episodeId" element={<EpisodePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

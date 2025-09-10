import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import ScrollTopButton from "./components/ScrollTopButton";
import { useTilt } from "./hooks/use-tilt";
import { useReveal } from "./hooks/use-reveal";

const queryClient = new QueryClient();

const App = () => {
  useReveal();
  useTilt();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CursorGlow />
        <ScrollProgress />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resume" element={<Resume />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ScrollTopButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

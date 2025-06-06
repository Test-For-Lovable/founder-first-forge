
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Admin from "./pages/Admin";
import BlogEditor from "./pages/BlogEditor";
import BlogManagement from "./pages/BlogManagement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PortfolioManagement from "./pages/PortfolioManagement";
import PortfolioEditor from "./pages/PortfolioEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog-editor" element={<BlogEditor />} />
          <Route path="/blog-editor/:slug" element={<BlogEditor />} />
          <Route path="/blog-management" element={<BlogManagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio-management" element={<PortfolioManagement />} />
          <Route path="/portfolio-editor" element={<PortfolioEditor />} />
          <Route path="/portfolio-editor/:slug" element={<PortfolioEditor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

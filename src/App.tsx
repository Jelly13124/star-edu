import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CountryUK from "./pages/CountryUK";
import CountryAUS from "./pages/CountryAUS";
import CountryHK from "./pages/CountryHK";
import CountryUSA from "./pages/CountryUSA";
import TutoringThesis from "./pages/TutoringThesis";
import TutoringExam from "./pages/TutoringExam";
import TutoringAssignment from "./pages/TutoringAssignment";
import TutoringCustom from "./pages/TutoringCustom";
import AppealFail from "./pages/AppealFail";
import AppealWithdrawal from "./pages/AppealWithdrawal";
import AppealMajorChange from "./pages/AppealMajorChange";
import AppealCustom from "./pages/AppealCustom";
import AppealMisconduct from "./pages/AppealMisconduct";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coverage/uk" element={<CountryUK />} />
          <Route path="/coverage/aus" element={<CountryAUS />} />
          <Route path="/coverage/hk" element={<CountryHK />} />
          <Route path="/coverage/usa" element={<CountryUSA />} />
          <Route path="/tutoring/thesis" element={<TutoringThesis />} />
          <Route path="/tutoring/exam" element={<TutoringExam />} />
          <Route path="/tutoring/assignment" element={<TutoringAssignment />} />
          <Route path="/tutoring/custom" element={<TutoringCustom />} />
          <Route path="/appeal/fail" element={<AppealFail />} />
          <Route path="/appeal/withdrawal" element={<AppealWithdrawal />} />
          <Route path="/appeal/major-change" element={<AppealMajorChange />} />
          <Route path="/appeal/custom" element={<AppealCustom />} />
          <Route path="/appeal/misconduct" element={<AppealMisconduct />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

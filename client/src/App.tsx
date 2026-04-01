import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Photography from "@/pages/photography";
import ImageManipulation from "@/pages/image-manipulation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/photography" component={Photography}/>
      <Route path="/image-manipulation" component={ImageManipulation}/>
      <Route component={NotFound} />
    </Switch>
  );
}

import { BackgroundCollage } from "@/components/layout/background-collage";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";
import { ScrollProgress } from "@/components/ui/scroll-progress";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <BackgroundCollage />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
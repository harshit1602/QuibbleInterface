import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import "@/i18n/config";

// Lazy-loaded components
const Hero = lazy(() => import("@/components/landing/Hero"));
const Features = lazy(() => import("@/components/landing/Features"));
const UseCases = lazy(() => import("@/components/landing/UseCases"));
const MissedRevenue = lazy(() => import("@/components/landing/MissedRevenue"));
const Benefits = lazy(() => import("./components/landing/Benefits"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));
const UnderConstruction = lazy(() => import("@/pages/UnderConstruction"));

// Scroll restoration component
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

// Loading fallback component
const LoadingFallback = () => <div className="p-4 text-center">Loading...</div>;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white flex flex-col gap-8">
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Switch>
            <Route path="/">
              <main role="main">
                <div className="flex flex-col gap-8">
                  <Hero /> 
                  <UseCases />
                  <Features />
                  <Benefits />
                  <MissedRevenue />
                </div>
              </main>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/under-construction" component={UnderConstruction} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
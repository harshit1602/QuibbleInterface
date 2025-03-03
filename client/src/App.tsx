import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import UseCases from "@/components/landing/UseCases";
import MissedRevenue from "@/components/landing/MissedRevenue";
import Footer from "@/components/landing/Footer";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <Switch>
          <Route path="/">
            <main className="pt-16">
              <Hero />
              <UseCases />
              <Features />
              <MissedRevenue />
            </main>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
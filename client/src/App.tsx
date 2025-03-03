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
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/not-found";
import UnderConstruction from "@/pages/UnderConstruction";
import "@/i18n/config"; // Import i18n configuration

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white flex flex-col">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/">
            <main className="pt-16" role="main">
              <article>
                <Hero />
                <UseCases />
                <Features />
                <MissedRevenue />
              </article>
            </main>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/under-construction" component={UnderConstruction} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
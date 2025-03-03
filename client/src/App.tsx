import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Hero from "@/components/landing/Hero";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <div className="relative w-[1440px] mx-auto flex flex-col items-start">
          <div className="flex flex-row justify-between items-center p-4 px-12 w-full border-b border-[rgba(255, 255, 255, 0.2)]">
            <div className="flex items-center gap-2">
              <img src="/assets/logo.svg" alt="Quibble AI" className="w-[18px] h-[19px]" />
              <span className="font-semibold text-[16px] text-[#2B2D3F]">Quibble AI</span>
            </div>
          </div>
          <main>
            <Hero />
          </main>
        </div>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
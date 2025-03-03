import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <div className="relative w-[1440px] mx-auto flex flex-col items-start gap-8">
          <div className="flex flex-row justify-between items-center p-4 px-12 w-full border-b border-[rgba(255, 255, 255, 0.2)]">
            <div className="flex items-center gap-2">
              <img src="/assets/logo.svg" alt="Quibble AI" className="w-[18px] h-[19px]" />
              <span className="font-semibold text-[16px] text-[#2B2D3F]">Quibble AI</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 px-[100px]">
            {/* Content will go here */}
          </div>
        </div>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Home />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
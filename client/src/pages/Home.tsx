import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UseCases from "@/components/landing/UseCases";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#DCE0E7] z-50">
        <div className="container mx-auto flex justify-between items-center px-12 py-4">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Quibble AI" className="w-[18px] h-[19px]" />
            <span className="font-semibold text-[16px] text-[#2B2D3F]">Quibble AI</span>
          </div>
        </div>
      </header>
      <main className="pt-[84px]">
        <div className="container mx-auto px-12">
          <h1 className="text-4xl font-bold text-[#2B2D3F]">
            Transform Your Customer Service with AI
          </h1>
        </div>
      </main>
    </div>
  );
}
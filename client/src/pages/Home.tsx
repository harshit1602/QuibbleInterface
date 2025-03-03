import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UseCases from "@/components/landing/UseCases";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[84px]">
        <Hero />
        <UseCases />
      </div>
    </div>
  );
}
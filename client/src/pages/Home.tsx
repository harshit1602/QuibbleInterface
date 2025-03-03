import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UseCases from "@/components/landing/UseCases";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <UseCases />
    </main>
  );
}
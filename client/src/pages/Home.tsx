import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UseCases from "@/components/landing/UseCases";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <UseCases />
      </main>
    </div>
  );
}
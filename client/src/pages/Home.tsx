import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import UseCases from "@/components/landing/UseCases";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-white">
        <Hero />
        <UseCases />
      </main>
    </>
  );
}
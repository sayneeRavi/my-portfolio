import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from '@/components/About';
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
            <About /> 
    </main>
  );
}

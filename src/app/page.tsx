import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/components/About";
import Education from '@/sections/Education';
import Certifications from '@/sections/Certifications';
import BackgroundSparkles from "@/components/BackgroundSparkles";


export default function Home() {
  return (
    <main className="relative min-h-screen text-black overflow-hidden">
      <BackgroundSparkles />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certifications />
    </main>
  );
}

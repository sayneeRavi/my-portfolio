import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/components/About';
import Journey from '@/sections/Journey';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import FieldNotes from '@/sections/FieldNotes';
import Contact from '@/sections/Contact';
import { SparklineDivider } from '@/components/Sparkline';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <SparklineDivider />
        <Journey />
        <SparklineDivider />
        <Skills />
        <SparklineDivider />
        <Projects />
        <SparklineDivider />
        <FieldNotes />
        <SparklineDivider />
        <Contact />
      </main>
    </>
  );
}

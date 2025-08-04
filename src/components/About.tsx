'use client';

import { motion } from 'framer-motion';
import BackgroundSparkles from '@/components/BackgroundSparkles';
import InfoCard from '@/components/InfoCard';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 px-6 bg-white dark:bg-[#0f0f0f] overflow-hidden scroll-mt-20"
    >
      <BackgroundSparkles />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I’m <strong className="text-black dark:text-white">Athmisaynee Raveendran</strong>,
          a third-year undergraduate at the University of Moratuwa pursuing a BSc in
          Information Technology. I’m deeply curious about patterns and passionate about
          data—diving into numbers to uncover the stories they tell.
          <br /><br />
          I enjoy building full-stack apps centered around data analytics, making
          insights intuitive and user-friendly. For my Millennium IT client project,
          I handled everything from gathering requirements and designing UIs
          to developing backend, integrating databases, and deploying the solution.
          <br /><br />
          As Level-3 Batch Representative for Batch 22 at UoM, I organized tech events
          empowering peers to land internships. My leadership roots trace back to
          being a school prefect twice.
          <br /><br />
          Finishing as a finalist in BrainStorm 2025—a top healthcare innovation
          competition—strengthened my real-world problem-solving passion.
          <br /><br />
          Outside tech, I’m an ambivert, cricket player, beach lover, and hiker.
          I enjoy storytelling, music, and connecting—whether in code or casual chats.
          <br /><br />
          <strong className="text-black dark:text-white">
            Let’s connect and build something amazing together. ✨
          </strong>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InfoCard
            title="Projects"
            value="4+"
            link="https://github.com/sayneeRavi?tab=repositories"
          />
          <InfoCard title="Years Coding" value="3+" />
          <InfoCard title="Client Projects" value="1" />
        </div>
      </div>
    </section>
  );
}

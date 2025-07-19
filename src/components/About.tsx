'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-black dark:text-white"
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
          Hi, I’m <strong className="text-black dark:text-white">Athmisaynee Raveendran</strong>, a third-year undergraduate at the University of Moratuwa, pursuing a BSc in Information Technology. I’m someone who’s always been curious about patterns and passionate about data —
           I love diving into numbers to uncover the stories they tell.
          <br /><br />
          I enjoy building full-stack web applications, especially those centered around data analytics, where I can turn complex insights into intuitive, user-friendly experiences. During my client project at Millennium IT,
           I gained hands-on experience in the full development lifecycle — from communicating with the company to understand their needs, visualizing solutions through diagrams, designing user interfaces, developing both frontend and backend components, 
           integrating databases, and deploying the final product. I also actively participated in monthly meetings to ensure alignment with the client’s vision.
          <br /><br />
          As the Level 3 Batch Representative of the 2022 cohort at the Faculty of IT – UoM, I’ve helped organize impactful tech events that empowered many of my peers to secure internships. My leadership journey goes back to school, 
          where I served as a prefect twice, building a strong foundation in communication, organization, and team coordination.
          <br /><br />
          I was also a finalist in BrainStorm 2025, Sri Lanka’s premier healthcare innovation competition — a milestone that fueled my passion for problem-solving in real-world scenarios.
          <br /><br />
          Outside the tech world, I’m an ambivert, a cricket player, and a beach girl who also finds peace in hiking. I love sharing stories from my life, connecting over music, and embracing every opportunity to learn and grow 
          — whether it’s through code, conversation, or creativity.
          <br /><br />
          <strong className="text-black dark:text-white">Let’s connect and build something amazing together. ✨</strong>
        </motion.p>
      </div>
    </section>
  );
}

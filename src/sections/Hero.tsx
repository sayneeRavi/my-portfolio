'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile-pic.png"
          alt="Athmi"
          width={200}
          height={200}
          className="rounded-full shadow-xl mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Athmi</span>
        </h1>

        <h2 className="text-xl text-gray-600 mb-6">
          <Typewriter
            words={[
              'Web Developer 💻',
              'UI/UX Enthusiast 🎨',
              'Student @ UoM 🎓',
              'Tech Explorer 🌍',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
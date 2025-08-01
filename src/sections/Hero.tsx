'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BackgroundSparkles from '@/components/BackgroundSparkles';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden"
    >
      {/* Enhanced Sparkles Background */}
      <BackgroundSparkles />
      
      {/* Additional floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50 animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-40 animation-delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-30 animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative mb-6 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-lg opacity-30 animate-pulse"></div>
          <Image
            src="/profile-pic.PNG"
            alt="Athmi"
            width={200}
            height={200}
            className="relative rounded-full shadow-2xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-cover border-4 border-white dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400 font-extrabold">Athmi</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 px-4 max-w-2xl mx-auto">
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
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

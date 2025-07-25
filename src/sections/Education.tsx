'use client';

import { motion } from 'framer-motion';
import EducationCard from '@/components/EducationCard';

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-white dark:bg-[#0f0f0f]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Education
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">
       <EducationCard
  title="BSc (Hons) in Information Technology"
  subtitle="University of Moratuwa – Strong performance in core coding subjects such as Programming Fundamentals, DSA, OOP, and Software Engineering"
  date="Currently a Level 3 Undergraduate"
  description="Consistently achieved top grades in programming-focused modules, demonstrating strong problem-solving and software development skills."
/>

        <EducationCard
  title="AI/ML Engineer – Stage 1 & 2"
  subtitle="SLIIT Centre for Open & Distance Education"
  date="2025"
  description="Successfully completed  AI/ML Engineer certification . Gained foundational knowledge in AI/ML tools (TensorFlow, PyTorch) and supervised learning techniques including regression, decision trees, random forests, SVM, and Naïve Bayes."
/>

     <EducationCard
  title="G.C.E. Advanced Level Examination"
  subtitle="T. Sri Shanmuga Hindu Ladies College – Biological Science Stream"
  date="2022"
  description="Pursued studies in the Biological Science stream (subjects: Biology, Chemistry, Physics), reflecting strong commitment, discipline, and a passion for learning."

/>

       <EducationCard
  title="G.C.E. Ordinary Level Examination"
  subtitle="T. Sri Shanmuga Hindu Ladies College"
  date="2017"
  description="Achieved 8 A's and B, building a strong academic foundation and commitment to excellence."
/>

      </div>
    </section>
  );
}

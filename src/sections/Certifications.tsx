'use client';

import { motion } from 'framer-motion';
import CertificationCard from '@/components/CertificationCard';

export default function Certifications() {

  return (
    <section id="certifications" className="py-16 px-6 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise in various technologies.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          <CertificationCard
            title="AI/ML Engineer Certification"
            issuer="SLIIT Centre for Open & Distance Education"
            date="2025"
            description="Comprehensive certification covering machine learning fundamentals, deep learning, and practical AI implementation. Gained hands-on experience with industry-standard tools and frameworks."
            skills={["TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "Python", "Data Science"]}
            credentialId="SLIIT-AIML-2025"
          />

          <CertificationCard
            title="Full Stack Development"
            issuer="Self-Directed Learning"
            date="2024"
            description="Comprehensive full-stack development skills through hands-on projects and continuous learning. Proficient in modern web technologies and frameworks."
            skills={["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"]}
          />

          <CertificationCard
            title="Programming Fundamentals Excellence"
            issuer="University of Moratuwa"
            date="2023"
            description="Achieved top grades in core programming subjects including Data Structures & Algorithms, Object-Oriented Programming, and Software Engineering."
            skills={["Java", "Python", "C++", "DSA", "OOP", "Software Engineering"]}
          />

          <CertificationCard
            title="Academic Excellence"
            issuer="G.C.E. Advanced Level"
            date="2022"
            description="Strong academic foundation in Biological Sciences, demonstrating analytical thinking and problem-solving abilities that translate well to programming and technology."
            skills={["Analytical Thinking", "Problem Solving", "Research", "Scientific Method"]}
          />
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
              🚀 Always learning and growing in the tech industry
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

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
            title="AI Agents Certification"
            issuer="Professional Development"
            date="2025"
            description="Advanced certification in AI Agents development, covering autonomous systems, intelligent automation, and AI-driven solutions."
            skills={["AI Agents", "Automation", "Machine Learning", "Intelligent Systems", "Python"]}
            certificateUrl="/ai-agents.webp"
          />

          <CertificationCard
            title="Data Analyst Certification"
            issuer="Professional Development"
            date="2024"
            description="Comprehensive data analysis certification covering statistical analysis, data visualization, and business intelligence techniques."
            skills={["Data Analysis", "Statistics", "Data Visualization", "Business Intelligence", "SQL", "Excel"]}
            certificateUrl="/data-analyst-certificate.pdf"
          />

          <CertificationCard
            title="Python for Beginners"
            issuer="E-Learning Platform"
            date="2024"
            description="Foundational Python programming certification covering syntax, data structures, algorithms, and practical programming applications."
            skills={["Python", "Programming Fundamentals", "Data Structures", "Algorithms", "Problem Solving"]}
            certificateUrl="/python-beginners-certificate.pdf"
          />

          <CertificationCard
            title="Web Design for Beginners"
            issuer="E-Learning Platform"
            date="2024"
            description="Web design fundamentals certification covering HTML, CSS, responsive design principles, and modern web development practices."
            skills={["HTML", "CSS", "Responsive Design", "Web Development", "UI/UX Basics"]}
            certificateUrl="/web-design-beginners-certificate.pdf"
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

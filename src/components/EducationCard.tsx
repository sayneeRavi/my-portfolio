'use client';
import { motion } from 'framer-motion';

type EducationCardProps = {
  title: string;
  subtitle: string;
  date?: string;
  description?: string;
};

export default function EducationCard({ title, subtitle, date, description }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.8 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-1">{subtitle}</p>
      {date && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>}
      {description && <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{description}</p>}
    </motion.div>
  );
}

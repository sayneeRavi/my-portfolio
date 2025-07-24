'use client';

import { motion } from 'framer-motion';

type InfoCardProps = {
  title: string;
  value: string | number;
  link?: string;
};

export default function InfoCard({ title, value, link }: InfoCardProps) {
  const card = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer rounded-xl border border-gray-300 dark:border-gray-700 p-6 shadow-sm bg-white dark:bg-gray-900 text-center transition"
    >
      <p className="text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400">
        {value}
      </p>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {title}
      </p>
    </motion.div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
      {card}
    </a>
  ) : (
    card
  );
}

'use client';
import { motion } from 'framer-motion';

type CertificationCardProps = {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  credentialId?: string;
  skills?: string[];
  certificateUrl?: string;
};

export default function CertificationCard({ 
  title, 
  issuer, 
  date, 
  description, 
  credentialId, 
  skills,
  certificateUrl 
}: CertificationCardProps) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 ${certificateUrl ? 'cursor-pointer hover:border-blue-300 dark:hover:border-blue-600' : ''}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{title}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">{issuer}</p>
        </div>
        {date && (
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            {date}
          </span>
        )}
      </div>
      
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
          {description}
        </p>
      )}
      
      {skills && skills.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      )}
      
      {credentialId && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          Credential ID: {credentialId}
        </p>
      )}
      
      {certificateUrl && (
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Click to view certificate
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-blue-600 dark:text-blue-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
  
  if (certificateUrl) {
    return (
      <a 
        href={certificateUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    );
  }
  
  return CardContent;
}

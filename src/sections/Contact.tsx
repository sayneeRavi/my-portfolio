'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/athmisaynee-raveendran-968664267/',
      color: 'hover:bg-blue-600',
      description: 'Connect with me professionally',
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/sayneeRavi',
      color: 'hover:bg-gray-800',
      description: 'Check out my code repositories',
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:athmisaynee@gmail.com',
      color: 'hover:bg-red-600',
      description: 'Send me an email',
    },
    {
      name: 'Medium',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 1043.63 592.71" fill="currentColor" aria-hidden="true">
          <path d="M588.67 296.36c0 163.67-131.46 296.36-293.51 296.36S1.65 460.03 1.65 296.36 133.11 0 295.16 0s293.51 132.69 293.51 296.36z"/>
          <path d="M940.8 296.36c0 154.5-65.73 279.74-146.86 279.74S647.08 450.86 647.08 296.36 712.81 16.62 793.94 16.62 940.8 141.86 940.8 296.36z"/>
          <path d="M1043.63 296.36c0 143.47-23.39 259.67-52.24 259.67s-52.24-116.2-52.24-259.67S962.54 36.69 991.39 36.69s52.24 116.2 52.24 259.67z"/>
        </svg>
      ),
      url: 'https://medium.com/@athmiraveendran',
      color: 'hover:bg-green-700',
      description: 'Read my articles on Medium',
    },
  ];

  return (
    <section id="contact" className="py-12 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </motion.div>

        {/* Contact Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target={contact.name === 'Email' ? '_self' : '_blank'}
              rel={contact.name === 'Email' ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${contact.color} hover:text-white`}
              title={contact.description}
            >
              {contact.icon}
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="mailto:athmisaynee@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © 2025 Athmi Saynee Raveendran. Built with Next.js &amp; React ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
}


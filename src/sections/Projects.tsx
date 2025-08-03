'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Framer Motion. Features dark mode, smooth animations, certifications showcase, and optimized performance. Demonstrates my skills in web development and UI/UX design.",
      image: "/my portfolio.png",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://athmisayneedev.vercel.app/",
      githubUrl: "https://github.com/sayneeRavi/my-portfolio",
      featured: true
    },
    {
      title: "NeuroSync WBC",
      description: "Advanced neurological data analysis system for White Blood Cell classification and monitoring. Collaborative project focusing on medical data processing and machine learning applications in healthcare diagnostics.",
      image: "/NeuroSync.jpg",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Medical Imaging", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abinaya-Subramaniam/neurosync_WBC"
    },
    {
      title: "Stroke Dashboard",
      description: "Interactive medical dashboard for stroke patient data visualization and analysis. Features real-time monitoring, data analytics, and comprehensive reporting tools for healthcare professionals.",
      image: "/Stroke Dashboard.png",
      technologies: ["React", "Data Visualization", "Chart.js", "Medical Data", "Dashboard UI"],
      liveUrl: "#",
      githubUrl: "https://github.com/sayneeRavi/stroke-dashboard"
    },
    {
      title: "Green Care Assist",
      description: "Innovative healthcare assistance application focused on providing green and sustainable healthcare solutions. Features user-friendly interface and comprehensive care management tools.",
      image: "/Green care assist .jpg",
      technologies: ["Healthcare Technology", "Sustainable Solutions", "User Interface", "Care Management"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "MIT Login System",
      description: "Secure authentication system with modern login interface. Features robust security measures, user-friendly design, and efficient session management for educational institutions.",
      image: "/MIT login.JPG",
      technologies: ["Authentication", "Security", "Web Development", "User Interface", "Session Management"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TREK Adventure Platform",
      description: "Adventure and trekking platform that connects outdoor enthusiasts with exciting trekking opportunities. Features interactive maps, booking system, and community features.",
      image: "/TREK.jpg",
      technologies: ["Web Development", "Interactive Maps", "Booking System", "Community Platform", "Adventure Tech"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects. Each project demonstrates different aspects of my skills in web development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="https://github.com/sayneeRavi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

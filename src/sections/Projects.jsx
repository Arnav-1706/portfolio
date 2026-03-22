import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Fake Social Media Account Detection',
    tech: ['TensorFlow', 'Keras', 'Python', 'Pandas'],
    desc: 'Machine learning model built to detect fake social media profiles with 97% accuracy, utilizing deep learning techniques.',
    github: 'https://github.com/Ritik4259/INT395---Fake-Social-Media-Account-Detection',
    live: null,
    color: 'border-neon-blue',
    shadow: 'hover:shadow-[0_0_20px_#00f3ff]',
    text: 'text-neon-blue'
  },

  {
    title: 'Movie Ticket Booking System',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    desc: 'Full-stack MERN application handling real-time seat selection, user authentication, and movie browsing with an interactive dashboard.',
    github: 'https://github.com/Arnav-1706/Movie-Ticket-Booking-System',
    live: 'https://movie-ticket-booking-system-44b8.onrender.com',
    color: 'border-neon-purple',
    shadow: 'hover:shadow-[0_0_20px_#8a2be2]',
    text: 'text-neon-purple'
  },

  {
    title: 'Tic Tac Toe Game',
    tech: ['C++', 'GUI Logic'],
    desc: 'An optimized C++ graphical game featuring a computer opponent with intelligent decision-making logic.',
    github: 'https://github.com/Arnav-1706/Tic-Tac-Toe_Game',
    live: null,
    color: 'border-white/50',
    shadow: 'hover:shadow-[0_0_20px_#ffffff]',
    text: 'text-white'
  },

  {
    title: 'GetWeather Website',
    tech: ['React', 'HTML', 'CSS', 'JavaScript', 'API'],
    desc: 'Responsive weather website using React and live weather APIs with adaptive design, faster loading, and smooth animations using Framer Motion.',
    github: 'https://github.com/Arnav-1706/Weather-website',
    live: null,
    color: 'border-cyan-400',
    shadow: 'hover:shadow-[0_0_20px_#22d3ee]',
    text: 'text-cyan-400'
  },

  {
    title: 'Multi-Tenant SaaS Platform (In Progress)',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    desc: 'Building a scalable multi-tenant SaaS architecture with authentication, isolated databases, and role-based access control.',
    github: null,
    live: null,
    color: 'border-green-400',
    shadow: 'hover:shadow-[0_0_20px_#22c55e]',
    text: 'text-green-400'
  },

  {
    title: 'Wisdom Compiler (In Progress)',
    tech: ['C++', 'Compiler Design', 'Parsing'],
    desc: 'Developing a custom compiler named WISDOM with lexical analysis, parsing, and intermediate code generation.',
    github: null,
    live: null,
    color: 'border-yellow-400',
    shadow: 'hover:shadow-[0_0_20px_#facc15]',
    text: 'text-yellow-400'
  }
];

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-pixel text-white tracking-widest mb-2">PROJECTS.EXE</h2>
        <p className="text-gray-400 font-light">SYSTEM_DUMP: RECENT EXECUTABLES</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -5, rotateX: 2, rotateY: 2 }}
            className={`bg-dark-800 p-6 border-2 ${project.color} ${project.shadow} transition-all duration-300 relative group overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className={`text-xl font-bold mb-2 ${project.text}`}>{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="text-xs font-pixel bg-dark-900 px-2 py-1 text-gray-300 border border-dark-600">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-400 font-light text-sm mb-6 h-20">
              {project.desc}
            </p>

            <div className="flex gap-4 border-t border-dark-700 pt-4 mt-auto">
              {project.github && (
                <a href={project.github} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                  <Github className="w-4 h-4 mr-2" /> Code
                </a>
              )}
              {project.live && (
                <a href={project.live} className="flex items-center text-sm text-neon-blue hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

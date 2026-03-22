import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, GraduationCap, ChevronRight } from 'lucide-react';

const About = ({ setSection, isSoundEnabled, playClick, playHover }) => {
  const [text, setText] = useState('');
  const fullText = "Accessing profile data... \nLoading user: Arnav Kant... \nStatus: ACTIVE \nDesignation: Full-Stack Developer & ML Enthusiast";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="flex items-center mb-8 border-b-2 border-neon-purple pb-4">
        <Terminal className="text-neon-blue mr-4 w-8 h-8" />
        <h2 className="text-3xl lg:text-4xl font-pixel text-white tracking-widest text-shadow-neon">ABOUT_ME.MD</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Bio & Terminal */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark-800 border border-dark-700 p-6 rounded-sm relative overflow-hidden group shadow-[0_0_15px_rgba(0,243,255,0.05)]"
          >
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-t-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="font-pixel text-neon-blue text-xs sm:text-sm mb-6 leading-loose min-h-[100px] whitespace-pre-line drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">
              {text}
              <span className="animate-pulse">_</span>
            </div>

            <div className="space-y-4 text-gray-300 font-light leading-relaxed text-lg z-10 relative">
              <p>
                I am <span className="text-white font-medium">Arnav Kant</span>, a highly motivated and problem-solving oriented developer. 
                Currently pursuing my B.Tech in CSE with a specialization in <span className="text-neon-purple">AI & ML</span> at Lovely Professional University.
              </p>
              <p>
                My expertise spans across the <span className="text-neon-blue">MERN stack</span>, crafting scalable web applications, 
                and building insightful Machine Learning models. I am deeply enthusiastic about Data Structures and Algorithms, 
                constantly refining my logic and efficiency through competitive programming.
              </p>
            </div>
          </motion.div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-800/60 border border-dark-700 p-5 hover:border-neon-purple/50 transition-colors duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                <GraduationCap className="text-neon-purple w-12 h-12 rotate-[-10deg]" />
              </div>
              <h3 className="text-neon-purple font-pixel text-xs mb-3 flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> EDUCATION_
              </h3>
              <p className="text-gray-200 font-medium text-lg">Lovely Professional University</p>
              <p className="text-gray-400 mt-1">B.Tech CSE (AI & ML)</p>
              <div className="mt-4 h-1 w-12 bg-neon-purple/50 group-hover:w-full transition-all duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-800/60 border border-dark-700 p-5 hover:border-neon-blue/50 transition-colors duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                <Code className="text-neon-blue w-12 h-12 rotate-[10deg]" />
              </div>
              <h3 className="text-neon-blue font-pixel text-xs mb-3 flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> EXPERTISE_
              </h3>
              <p className="text-gray-200 font-medium text-lg">Full-Stack & ML</p>
              <p className="text-gray-400 mt-1">MERN, Python, Problem Solving</p>
              <div className="mt-4 h-1 w-12 bg-neon-blue/50 group-hover:w-full transition-all duration-500" />
            </motion.div>
          </div>
        </div>

        {/* Right Column - Skill Visualizer / Abstract Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-4 flex flex-col gap-6"
        >
          <div className="bg-dark-800 border-2 border-dark-700/50 p-6 flex-1 flex flex-col justify-center items-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.1)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Glowing Core Graphic */}
            <div className="relative w-48 h-48 flex justify-center items-center mb-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-neon-blue/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-neon-purple/40 rounded-full"
              />
              <div className="w-24 h-24 bg-dark-900 rounded-full border border-neon-blue/50 flex justify-center items-center relative z-10 shadow-[0_0_30px_rgba(0,243,255,0.2)] group-hover:shadow-[0_0_50px_rgba(138,43,226,0.4)] transition-shadow duration-500">
                <Cpu className="text-white w-10 h-10 animate-pulse" />
              </div>
            </div>

            <div className="text-center w-full relative z-10">
              <div className="px-4 py-2 border border-neon-blue/30 bg-neon-blue/5 text-neon-blue font-pixel text-[10px] inline-block mb-3">
                SYSTEM_STATUS: OPTIMAL
              </div>
              <ul className="text-sm text-gray-400 font-pixel mt-4 space-y-2 opacity-80 text-left w-full max-w-[200px] mx-auto">
                <li className="flex justify-between items-center">
                  <span>LOGIC:</span>
                  <span className="text-neon-purple">100%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>CREATIVITY:</span>
                  <span className="text-neon-blue">max_val</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>COFFEE:</span>
                  <span className="text-white animate-pulse">ERR_LOW</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

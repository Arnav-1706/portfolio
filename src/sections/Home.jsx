import { motion } from 'framer-motion';

const Home = ({ setSection, isSoundEnabled, playClick, playHover }) => {
  const introText = "Hello, I'm".split("");
  const nameText = "ARNAV KANT".split("");

  return (
    <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 flex"
      >
        {introText.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 + 0.5 }}
            className="text-xl md:text-2xl text-neon-purple font-pixel mr-1"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight flex flex-wrap">
        {nameText.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 1, type: "spring", stiffness: 100 }}
            className={`text-transparent bg-clip-text bg-gradient-to-r ${index < 5 ? 'from-white to-gray-400' : 'from-neon-blue to-neon-purple'
              } drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <h2 className="text-xl md:text-3xl text-gray-300 font-light mb-8 border-l-4 border-neon-blue pl-4">
          B.Tech CSE (AI & ML) Student <span className="text-neon-purple animate-pulse">|</span> MERN Stack Developer
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          Problem-solving oriented developer with experience in full-stack web applications,
          machine learning models, and competitive programming.
        </p>

        <div className="mt-12 flex gap-4">
          <button onClick={() => {
            if (isSoundEnabled) playClick();
            setSection("Projects");
          }} className="px-6 py-3 bg-neon-blue/10 border-2 border-neon-blue text-neon-blue font-pixel text-xs hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            VIEW_PROJECTS
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-dark-800 border-2 border-neon-purple text-neon-purple font-pixel text-xs hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(138,43,226,0.2)]"
          >
            RESUME.EXE
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

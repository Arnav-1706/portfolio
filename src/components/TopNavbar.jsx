const links = ['Home', 'About', 'Skills', 'Projects', 'Stats', 'Achievements', 'Contact'];

const TopNavbar = ({ activeSection, setActiveSection, playHover, playClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-dark-900/60 backdrop-blur-md border-b border-neon-blue/20 flex justify-center py-2 opacity-30 hover:opacity-100 transition-opacity duration-300">
      <div className="flex overflow-x-auto gap-6 px-4 py-1 items-center max-w-7xl mx-auto hide-scrollbar">
        {links.map((link) => (
          <button
            key={link}
            onMouseEnter={() => playHover && playHover()}
            onClick={() => {
              playClick && playClick();
              setActiveSection(link);
            }}
            className={`text-sm tracking-widest whitespace-nowrap transition-colors duration-200 uppercase font-light ${
              activeSection === link 
                ? 'text-neon-blue drop-shadow-[0_0_5px_#00f3ff]' 
                : 'text-gray-400 hover:text-neon-purple'
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TopNavbar;

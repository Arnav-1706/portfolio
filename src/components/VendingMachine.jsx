const links = ['Home', 'About', 'Skills', 'Projects', 'Stats', 'Achievements', 'Contact'];

const VendingMachine = ({ activeSection, setActiveSection, playHover, playClick }) => {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-full bg-dark-800 border-r-4 border-neon-purple relative z-30 shadow-[4px_0_20px_#8a2be2]">
      <div className="p-6 border-b border-neon-blue/20">
        <h2 className="text-xl font-pixel text-neon-blue leading-snug">
          ARNAV
          <br />KANT
        </h2>
        <p className="text-xs text-gray-400 mt-2 font-modern tracking-widest">PORTFOLIO.OS v2</p>
      </div>
      
      <div className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto">
        <p className="text-xs text-neon-purple mb-2">SELECT SECTION_</p>
        
        {links.map((link) => (
          <button
            key={link}
            onMouseEnter={() => playHover && playHover()}
            onClick={() => {
              playClick && playClick();
              setActiveSection(link);
            }}
            className={`group flex items-center p-3 border-2 transition-all duration-300 ${
              activeSection === link
                ? 'border-neon-blue bg-neon-blue/10 shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                : 'border-dark-700 bg-dark-900 hover:border-neon-purple hover:bg-neon-purple/10'
            }`}
          >
            <span className={`w-3 h-3 rounded-full mr-3 ${activeSection === link ? 'bg-neon-blue animate-pulse' : 'bg-dark-700 group-hover:bg-neon-purple'}`} />
            <span className={`font-pixel text-[10px] tracking-widest ${activeSection === link ? 'text-neon-blue' : 'text-gray-300 group-hover:text-neon-purple'}`}>
              {link.toUpperCase()}
            </span>
          </button>
        ))}
      </div>

      <div className="p-6 border-t border-neon-blue/20 flex flex-col items-center">
        <div className="w-16 h-4 bg-black rounded-full mb-2 border border-neon-purple" />
         <p className="text-[10px] text-neon-blue">INSERT COIN</p>
      </div>
      <div className="scanline"></div>
    </aside>
  );
};

export default VendingMachine;

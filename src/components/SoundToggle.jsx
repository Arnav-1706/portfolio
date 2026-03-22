import { Volume2, VolumeX } from 'lucide-react';

const SoundToggle = ({ isSoundEnabled, toggleSound }) => {
  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 p-3 bg-dark-800 border border-neon-purple rounded-full hover:shadow-[0_0_15px_#8a2be2] transition-shadow duration-300 group"
      aria-label="Toggle Sound"
    >
      {isSoundEnabled ? (
        <Volume2 className="text-neon-blue group-hover:text-neon-purple transition-colors" size={24} />
      ) : (
        <VolumeX className="text-gray-500 hover:text-white transition-colors" size={24} />
      )}
    </button>
  );
};

export default SoundToggle;

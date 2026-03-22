import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import useSound from 'use-sound';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import VendingMachine from './components/VendingMachine';
import TopNavbar from './components/TopNavbar';
import SoundToggle from './components/SoundToggle';

import { Home, About, Skills, Projects, Stats, Achievements, Contact } from './sections';

const componentsMap = {
  Home, About, Skills, Projects, Stats, Achievements, Contact
};

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('Home');
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  // Using public domain sounds for reliable playback
  const [playHover] = useSound("/hover.mp3");
  const [playClick] = useSound("/click.mp3");

  const ActiveComponent = componentsMap[activeSection];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <ParticleBackground />
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex h-screen overflow-hidden text-gray-100 font-modern bg-transparent relative z-10 antialiased">

          <TopNavbar
            activeSection={activeSection}
            setActiveSection={handleSectionChange}
            isSoundEnabled={isSoundEnabled}
            playHover={playHover}
            playClick={playClick}
          />

          <VendingMachine
            activeSection={activeSection}
            setActiveSection={handleSectionChange}
            isSoundEnabled={isSoundEnabled}
            playHover={playHover}
            playClick={playClick}
          />

          <main className="flex-1 relative overflow-hidden flex justify-center items-center mt-12 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -30 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="w-full h-full p-6 md:p-12 lg:p-20 overflow-y-auto hide-scrollbar"
              >
                <ActiveComponent
                  setSection={handleSectionChange}
                  isSoundEnabled={isSoundEnabled}
                  playClick={playClick}
                  playHover={playHover}
                />
              </motion.div>
            </AnimatePresence>
          </main>

          <SoundToggle
            isSoundEnabled={isSoundEnabled}
            toggleSound={() => setIsSoundEnabled(!isSoundEnabled)}
          />
        </div>
      )}
    </>
  );
}

export default App;

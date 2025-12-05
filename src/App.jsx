import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import LogoLoop from './components/LogoLoop';
import LoadingScreen from './components/LoadingScreen';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiFirebase, SiFramer } from 'react-icons/si';

const techLogos = [
  { node: <SiReact size={32} className="text-white" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={32} className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript size={32} className="text-white" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss size={32} className="text-white" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVite size={32} className="text-white" />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiFirebase size={32} className="text-white" />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiFramer size={32} className="text-white" />, title: "Framer Motion", href: "https://www.framer.com/motion" },
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      <div className={`min-h-screen transition-colors duration-300 relative ${!isLoaded ? 'overflow-hidden h-screen' : ''}`}>
        <BackgroundAnimation />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Contact />

          {/* Technology Partners / Tech Stack Loop */}
          <div className="py-10 overflow-hidden">
            <h3 className="text-center text-white/50 text-sm uppercase tracking-widest mb-8">Powered By Modern Tech</h3>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Technologies"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Timeline from './components/sections/Timeline';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Press from './components/sections/Press';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen font-sora">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Timeline />
        <Projects />
        <Achievements />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

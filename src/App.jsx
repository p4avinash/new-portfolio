import About from './components/About';
import BackToTop from './components/BackToTop';
import EngineeringImpact from './components/EngineeringImpact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-950 bg-grid-pattern text-slate-100 font-sans selection:bg-violet-500 selection:text-white relative overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <EngineeringImpact />
        <Experience />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;

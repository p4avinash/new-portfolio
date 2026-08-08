import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950'>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

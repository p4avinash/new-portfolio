import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '../data';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFilePdf } from 'react-icons/fa';
import resume from '../resume/Avinash_Kumar_Resume_Final_2026.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-900 py-4'
      }`}
    >
      <div className='align-element flex justify-between items-center'>
        {/* Brand Logo */}
        <motion.a
          href='#home'
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className='group flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-100'
        >
          <span className='w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300 shadow-sm'>
            A
          </span>
          <span>
            Avinash<span className='text-emerald-400'>.dev</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-x-8'>
          <div className='flex gap-x-6 bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner'>
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <motion.a
                  key={id}
                  href={href}
                  whileHover={{ y: -1, color: '#10b981' }}
                  className='capitalize text-sm font-medium tracking-wide text-slate-300 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-slate-800/50'
                >
                  {text}
                </motion.a>
              );
            })}
          </div>

          <motion.a
            href={resume}
            download='Avinash_Kumar_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-full text-sm transition-colors duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30'
          >
            <FaFilePdf className='h-4 w-4' />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className='md:hidden flex items-center gap-3'>
          <a
            href={resume}
            download='Avinash_Kumar_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5 bg-emerald-500 text-slate-950 font-semibold px-3 py-1.5 rounded-full text-xs shadow-md'
          >
            <FaFilePdf className='h-3.5 w-3.5' />
            <span>Resume</span>
          </a>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 text-slate-300 hover:text-emerald-400 focus:outline-none'
            aria-label='Toggle menu'
          >
            {isOpen ? <HiX className='h-6 w-6' /> : <HiMenuAlt3 className='h-6 w-6' />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='md:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-4 space-y-3 backdrop-blur-lg overflow-hidden'
          >
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className='block capitalize text-base font-medium text-slate-200 hover:text-emerald-400 transition-colors py-2 border-b border-slate-800/50'
                >
                  {text}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


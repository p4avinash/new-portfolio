import { useState, useEffect } from 'react';
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-900 py-4'
      }`}
    >
      <div className='align-element flex justify-between items-center'>
        {/* Brand Logo */}
        <a href='#home' className='group flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-100'>
          <span className='w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all duration-300'>
            A
          </span>
          <span>
            Avinash<span className='text-emerald-400'>.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-x-8'>
          <div className='flex gap-x-6 bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-800/80'>
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className='capitalize text-sm font-medium tracking-wide text-slate-300 hover:text-emerald-400 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-slate-800/50'
                >
                  {text}
                </a>
              );
            })}
          </div>

          <a
            href={resume}
            download='Avinash_Kumar_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-full text-sm transition-all duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-95'
          >
            <FaFilePdf className='h-4 w-4' />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className='md:hidden flex items-center gap-3'>
          <a
            href={resume}
            download='Avinash_Kumar_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5 bg-emerald-500 text-slate-950 font-semibold px-3 py-1.5 rounded-full text-xs'
          >
            <FaFilePdf className='h-3.5 w-3.5' />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 text-slate-300 hover:text-emerald-400 focus:outline-none'
            aria-label='Toggle menu'
          >
            {isOpen ? <HiX className='h-6 w-6' /> : <HiMenuAlt3 className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-4 space-y-3 backdrop-blur-lg animate-fadeIn'>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;

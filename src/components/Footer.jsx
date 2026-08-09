import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaMedium, FaFilePdf, FaHeart } from 'react-icons/fa';
import resume from '../resume/Avinash_Kumar_Resume_Final_2026.pdf';
import { links } from '../data';

const Footer = () => {
  return (
    <footer id='contact' className='bg-slate-950 text-slate-100 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden'>
      {/* Background ambient lighting */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none animate-glow-pulse'></div>

      <div className='align-element relative z-10 space-y-12'>
        {/* Contact Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='glass-panel p-8 sm:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-2xl hover:border-emerald-500/30 transition-colors'
        >
          <div className='lg:col-span-7 space-y-4'>
            <span className='text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 inline-block shadow-sm'>
              Let&apos;s Connect
            </span>
            <h3 className='text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight'>
              Interested in collaborating or hiring?
            </h3>
            <p className='text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl'>
              I&apos;m open to senior frontend engineer roles, full-stack React/TypeScript opportunities, and AI integration projects. Feel free to reach out directly!
            </p>
          </div>

          <div className='lg:col-span-5 flex flex-col gap-3.5 sm:pl-4'>
            <motion.a
              href='mailto:p4avinashkumar@gmail.com'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className='flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-2xl text-sm sm:text-base transition-colors duration-200 shadow-lg shadow-emerald-500/20 justify-center sm:justify-start'
            >
              <FaEnvelope className='h-4 w-4' />
              <span>p4avinashkumar@gmail.com</span>
            </motion.a>

            <div className='grid grid-cols-2 gap-3'>
              <motion.a
                href='tel:+919973516916'
                whileHover={{ scale: 1.03, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className='flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors'
              >
                <FaPhoneAlt className='text-emerald-400 h-3.5 w-3.5' />
                <span>+91 99735 16916</span>
              </motion.a>

              <div className='flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium'>
                <FaMapMarkerAlt className='text-emerald-400 h-3.5 w-3.5' />
                <span>Bihar, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom Links & Copyright */}
        <div className='pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400'>
          {/* Brand */}
          <div className='space-y-1 text-center md:text-left'>
            <a href='#home' className='text-lg font-bold text-slate-100 group inline-flex items-center gap-1'>
              <span>Avinash</span><span className='text-emerald-400 group-hover:translate-x-0.5 transition-transform inline-block'>.dev</span>
            </a>
            <p className='text-xs text-slate-400'>
              Frontend Engineer · React, TypeScript, GraphQL & AI Solutions
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className='flex flex-wrap justify-center gap-x-6 gap-y-2'>
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className='capitalize text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors'
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className='flex items-center gap-3'>
            <motion.a
              href='https://github.com/p4avinash'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors'
              aria-label='GitHub'
            >
              <FaGithub className='h-4 w-4' />
            </motion.a>

            <motion.a
              href='https://www.linkedin.com/in/p4avinash/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors'
              aria-label='LinkedIn'
            >
              <FaLinkedin className='h-4 w-4' />
            </motion.a>

            <motion.a
              href='https://medium.com/@p4avinash'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors'
              aria-label='Medium'
            >
              <FaMedium className='h-4 w-4' />
            </motion.a>

            <motion.a
              href={resume}
              download='Avinash_Kumar_Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors'
              aria-label='Resume'
            >
              <FaFilePdf className='h-4 w-4' />
            </motion.a>
          </div>
        </div>

        <div className='text-center text-xs text-slate-400 border-t border-slate-900/60 pt-6 flex items-center justify-center gap-1.5'>
          <span>© {new Date().getFullYear()} Avinash Kumar. Built with</span>
          <FaHeart className='text-red-500 h-3.5 w-3.5 inline-block heart-spin' />
          <span>by Avinash Kumar</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


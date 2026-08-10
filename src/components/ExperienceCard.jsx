/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceCard = ({ role, company, location, period, type, signals, highlights, tech, isFirst }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className='relative pl-8 sm:pl-10 pb-12 last:pb-0 group'
    >
      {/* Timeline vertical connector line */}
      <div className='absolute left-3 top-3 -bottom-3 w-0.5 bg-gradient-to-b from-violet-500/50 to-slate-800 group-last:hidden'></div>

      {/* Timeline indicator node */}
      <div
        className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          isFirst
            ? 'bg-violet-500/20 border-violet-400 text-violet-400 shadow-md shadow-violet-500/30 scale-110'
            : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-violet-500/60 group-hover:text-violet-400'
        }`}
      >
        {isFirst && <span className='absolute inset-0 rounded-full bg-violet-400/20 animate-ping'></span>}
        <span className='w-2 h-2 rounded-full bg-current relative z-10'></span>
      </div>

      {/* Card Content Container */}
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className='glass-card bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90 p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl hover:border-t-violet-500/60'
      >
        {/* Header: Role & Period */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4'>
          <div>
            <h3 className='text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5 flex-wrap tracking-tight'>
              <span>{role}</span>
              <span className='text-violet-400 font-medium text-lg'>@ {company}</span>
              {type && (
                <span className='text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800'>
                  {type}
                </span>
              )}
            </h3>
            <div className='flex items-center gap-4 text-xs sm:text-sm text-slate-400 mt-1 font-medium'>
              <span className='flex items-center gap-1.5'>
                <FaBriefcase className='text-violet-400/80 h-3.5 w-3.5' />
                {company}
              </span>
              <span className='flex items-center gap-1.5'>
                <FaMapMarkerAlt className='text-violet-400/80 h-3.5 w-3.5' />
                {location}
              </span>
            </div>
          </div>

          <span className='inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20 self-start sm:self-center shadow-sm'>
            <FaCalendarAlt className='h-3 w-3' />
            {period}
          </span>
        </div>

        {/* Seniority Signal Badges */}
        {signals && signals.length > 0 && (
          <div className='flex flex-wrap gap-1.5 pt-1'>
            {signals.map((signal, idx) => (
              <span
                key={idx}
                className='text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20'
              >
                {signal}
              </span>
            ))}
          </div>
        )}

        {/* Highlights List */}
        <ul className='space-y-2.5 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed'>
          {highlights.map((point, index) => (
            <li key={index} className='flex items-start gap-3 group/item'>
              <span className='text-violet-400 font-bold mt-1 text-xs transition-transform group-hover/item:translate-x-0.5 duration-200'>▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Technologies Badge Pills */}
        {tech && tech.length > 0 && (
          <div className='pt-4 border-t border-slate-800/80 flex flex-wrap gap-2'>
            {tech.map((item, idx) => (
              <span
                key={idx}
                className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-violet-300/90 border border-slate-800 hover:border-violet-500/30 transition-colors'
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </motion.div>
  );
};

export default ExperienceCard;

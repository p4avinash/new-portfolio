/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceCard = ({ role, company, location, period, highlights, tech, isFirst }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='relative pl-8 sm:pl-10 pb-12 last:pb-0 group'
    >
      {/* Timeline vertical connector line */}
      <div className='absolute left-3 top-3 -bottom-3 w-0.5 bg-gradient-to-b from-emerald-500/50 to-slate-800 group-last:hidden'></div>

      {/* Timeline indicator node */}
      <div
        className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          isFirst
            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-md shadow-emerald-500/30 scale-110'
            : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-emerald-500/60 group-hover:text-emerald-400'
        }`}
      >
        {isFirst && <span className='absolute inset-0 rounded-full bg-emerald-400/20 animate-ping'></span>}
        <span className='w-2 h-2 rounded-full bg-current relative z-10'></span>
      </div>

      {/* Card Content Container */}
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className='glass-card p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl'
      >
        {/* Header: Role & Period */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4'>
          <div>
            <h3 className='text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5 flex-wrap'>
              <span>{role}</span>
              <span className='text-emerald-400 font-medium text-lg'>@ {company}</span>
            </h3>
            <div className='flex items-center gap-4 text-xs sm:text-sm text-slate-400 mt-1 font-medium'>
              <span className='flex items-center gap-1.5'>
                <FaBriefcase className='text-emerald-500/80 h-3.5 w-3.5' />
                {company}
              </span>
              <span className='flex items-center gap-1.5'>
                <FaMapMarkerAlt className='text-emerald-500/80 h-3.5 w-3.5' />
                {location}
              </span>
            </div>
          </div>

          <span className='inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 self-start sm:self-center shadow-sm'>
            <FaCalendarAlt className='h-3 w-3' />
            {period}
          </span>
        </div>

        {/* Highlights List */}
        <ul className='space-y-2.5 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed'>
          {highlights.map((point, index) => (
            <li key={index} className='flex items-start gap-3 group/item'>
              <span className='text-emerald-400 font-bold mt-1 text-xs transition-transform group-hover/item:translate-x-0.5 duration-200'>▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Technologies Badge Pills */}
        {tech && tech.length > 0 && (
          <div className='pt-4 border-t border-slate-800/80 flex flex-wrap gap-2'>
            {tech.map((item, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 transition-colors'
              >
                {item}
              </motion.span>
            ))}
          </div>
        )}
      </motion.article>
    </motion.div>
  );
};

export default ExperienceCard;


/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const SkillsCard = ({ icon, title, summary, skills }) => {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className='glass-card bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90 p-6 sm:p-7 rounded-2xl flex flex-col justify-between group duration-300 relative overflow-hidden hover:border-t-violet-500/60 shadow-xl'
    >
      <div className='space-y-3.5 relative z-10'>
        <div className='w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:scale-105 transition-all duration-300 shadow-sm'>
          {icon}
        </div>
        <h3 className='text-lg sm:text-xl font-bold text-slate-100 tracking-tight group-hover:text-violet-400 transition-colors duration-200'>
          {title}
        </h3>
        <p className='text-slate-400 text-xs sm:text-sm leading-relaxed'>
          {summary}
        </p>
      </div>

      {skills && skills.length > 0 && (
        <div className='mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 relative z-10'>
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-violet-300/90 border border-slate-800 hover:border-violet-500/30 transition-colors'
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default SkillsCard;

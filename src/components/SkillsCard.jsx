/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const SkillsCard = ({ icon, title, text, tags }) => {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className='glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group duration-300 relative overflow-hidden'
    >
      <div className='space-y-4 relative z-10'>
        <div className='w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm'>
          {icon}
        </div>
        <h3 className='text-xl font-bold text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors duration-200'>
          {title}
        </h3>
        <p className='text-slate-400 text-sm leading-relaxed'>
          {text}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className='mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 relative z-10'>
          {tags.map((tag, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 transition-colors'
            >
              {tag}
            </motion.span>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default SkillsCard;


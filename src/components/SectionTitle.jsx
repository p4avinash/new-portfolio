/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const SectionTitle = ({ text, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='flex flex-col items-start gap-2 mb-12 border-b border-slate-800/80 pb-5'
    >
      {subtitle && (
        <span className='text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shadow-sm shadow-emerald-500/10'>
          {subtitle}
        </span>
      )}
      <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 capitalize flex items-center gap-3'>
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='w-2 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full inline-block origin-bottom'
        ></motion.span>
        {text}
      </h2>
    </motion.div>
  );
};
export default SectionTitle;


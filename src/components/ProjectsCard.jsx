/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const ProjectsCard = ({ url, img, github, title, text, tags, featured }) => {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className='glass-card rounded-2xl overflow-hidden flex flex-col justify-between group duration-300 shadow-xl'
    >
      <div>
        {/* Thumbnail Image Container */}
        <div className='relative overflow-hidden aspect-video bg-slate-900 border-b border-slate-800/80'>
          <img
            src={img}
            alt={title}
            className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300'></div>

          {featured && (
            <span className='absolute top-3 left-3 bg-emerald-500/90 backdrop-blur-md text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-lg border border-emerald-400/30'>
              Featured Project
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className='p-6 sm:p-7 space-y-4'>
          <h3 className='text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-200 tracking-tight'>
            {title}
          </h3>
          
          <p className='text-slate-300 text-sm leading-relaxed'>
            {text}
          </p>

          {/* Technology Badges */}
          {tags && tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5 pt-2'>
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.4)" }}
                  className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-emerald-400/90 border border-slate-800 transition-colors'
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className='p-6 sm:p-7 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between gap-4'>
        <motion.a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-semibold px-4 py-2.5 rounded-xl border border-emerald-500/30 text-xs sm:text-sm transition-all duration-200 shadow-sm group/btn'
        >
          <span>Live Demo</span>
          <FaExternalLinkAlt className='h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200' />
        </motion.a>

        <motion.a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-slate-100 font-semibold px-4 py-2.5 rounded-xl border border-slate-800 text-xs sm:text-sm transition-all duration-200'
        >
          <FaGithub className='h-4 w-4' />
          <span>Source Code</span>
        </motion.a>
      </div>
    </motion.article>
  )
}

export default ProjectsCard


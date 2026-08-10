/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const ProjectsCard = ({ url, img, github, title, subtitle, text, tags, highlights, featured }) => {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className='glass-card bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90 rounded-2xl overflow-hidden flex flex-col justify-between group duration-300 shadow-xl hover:border-t-violet-500/60'
    >
      <div>
        {/* Thumbnail Image Container */}
        <div className='relative overflow-hidden aspect-video bg-slate-900 border-b border-slate-800/80'>
          <img
            src={img}
            alt={title}
            loading='lazy'
            className='w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300'></div>

          {featured && (
            <span className='absolute top-3 left-3 bg-violet-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg border border-violet-400/30'>
              Featured Work
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className='p-6 sm:p-7 space-y-3.5'>
          <div>
            <h3 className='text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors duration-200 tracking-tight'>
              {title}
            </h3>
            {subtitle && (
              <p className='text-xs font-mono text-violet-300/90 mt-1 font-medium'>
                {subtitle}
              </p>
            )}
          </div>
          
          <p className='text-slate-300 text-sm leading-relaxed'>
            {text}
          </p>

          {/* Highlights List */}
          {highlights && highlights.length > 0 && (
            <ul className='space-y-1.5 pt-1 text-xs text-slate-400 border-t border-slate-800/60'>
              {highlights.map((h, i) => (
                <li key={i} className='flex items-start gap-2'>
                  <span className='text-violet-400 font-bold'>▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technology Badges */}
          {tags && tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5 pt-2'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-violet-300/90 border border-slate-800 hover:border-violet-500/30 transition-colors'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className='p-6 sm:p-7 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between gap-3'>
        <motion.a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`View live demo of ${title}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='flex-1 inline-flex items-center justify-center gap-2 bg-violet-500/10 hover:bg-violet-600 text-violet-400 hover:text-white font-semibold px-4 py-2.5 rounded-xl border border-violet-500/30 text-xs sm:text-sm transition-all duration-200 shadow-sm focus-ring group/btn'
        >
          <span>Live Demo</span>
          <FaExternalLinkAlt className='h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200' />
        </motion.a>

        <motion.a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`View source code of ${title} on GitHub`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-slate-100 font-semibold px-4 py-2.5 rounded-xl border border-slate-800 text-xs sm:text-sm transition-all duration-200 focus-ring'
        >
          <FaGithub className='h-4 w-4' />
          <span>Source Code</span>
        </motion.a>
      </div>
    </motion.article>
  )
}

export default ProjectsCard

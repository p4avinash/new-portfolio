/* eslint-disable react/prop-types */
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectsCard = ({ url, img, github, title, text, tags, featured }) => {
  return (
    <article className='glass-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 duration-300'>
      <div>
        {/* Thumbnail Image Container */}
        <div className='relative overflow-hidden aspect-video bg-slate-900 border-b border-slate-800/80'>
          <img
            src={img}
            alt={title}
            className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60'></div>

          {featured && (
            <span className='absolute top-3 left-3 bg-emerald-500/90 backdrop-blur-md text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-lg'>
              Featured Project
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className='p-6 sm:p-7 space-y-4'>
          <h3 className='text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-tight'>
            {title}
          </h3>
          
          <p className='text-slate-300 text-sm leading-relaxed'>
            {text}
          </p>

          {/* Technology Badges */}
          {tags && tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5 pt-2'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-emerald-400/90 border border-slate-800'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className='p-6 sm:p-7 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between gap-4'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-semibold px-4 py-2.5 rounded-xl border border-emerald-500/30 text-xs sm:text-sm transition-all duration-200 shadow-sm'
        >
          <span>Live Demo</span>
          <FaExternalLinkAlt className='h-3 w-3' />
        </a>

        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-slate-100 font-semibold px-4 py-2.5 rounded-xl border border-slate-800 text-xs sm:text-sm transition-all duration-200'
        >
          <FaGithub className='h-4 w-4' />
          <span>Source Code</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectsCard

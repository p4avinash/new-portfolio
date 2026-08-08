/* eslint-disable react/prop-types */
const SkillsCard = ({ icon, title, text, tags }) => {
  return (
    <article className='glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 duration-300'>
      <div className='space-y-4'>
        <div className='w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all duration-300'>
          {icon}
        </div>
        <h3 className='text-xl font-bold text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors'>
          {title}
        </h3>
        <p className='text-slate-400 text-sm leading-relaxed'>
          {text}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className='mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5'>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className='text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-500/30 transition-colors'
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default SkillsCard

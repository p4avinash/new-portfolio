/* eslint-disable react/prop-types */
const SectionTitle = ({ text, subtitle }) => {
  return (
    <div className='flex flex-col items-start gap-2 mb-12 border-b border-slate-800/80 pb-5'>
      {subtitle && (
        <span className='text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20'>
          {subtitle}
        </span>
      )}
      <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 capitalize flex items-center gap-3'>
        <span className='w-2 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full inline-block'></span>
        {text}
      </h2>
    </div>
  )
}
export default SectionTitle

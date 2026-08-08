/* eslint-disable react/prop-types */
import heroImg from "../assets/hero.svg"
import { FaGithubSquare, FaLinkedin, FaFilePdf, FaMedium, FaEnvelope, FaChevronRight } from "react-icons/fa"
import resume from "../resume/Avinash_Kumar_Resume_Final_2026.pdf"
import { heroMetrics } from "../data"

const Tooltip = ({ label }) => (
  <span className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none bg-slate-800 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-2xl whitespace-nowrap z-20 tracking-wide border border-slate-700'>
    {label}
    <span className='absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-800'></span>
  </span>
)

const Hero = () => {
  return (
    <section id='home' className='relative bg-slate-950 text-slate-100 py-16 sm:py-24 overflow-hidden border-b border-slate-900'>
      {/* Background ambient lighting */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none'></div>
      <div className='absolute bottom-10 right-10 w-[300px] h-[200px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none'></div>

      <div className='align-element relative z-10 grid lg:grid-cols-12 items-center gap-12'>
        <article className='lg:col-span-7 space-y-6'>
          {/* Status Badge */}
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-medium text-emerald-400 backdrop-blur-md'>
            <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></span>
            <span>Frontend Engineer (5+ Yrs) · React & AI Solutions</span>
          </div>

          {/* Heading */}
          <div className='space-y-2'>
            <h1 className='text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight'>
              Hi, I'm <span className='gradient-text'>Avinash Kumar</span>
            </h1>
            <p className='text-xl sm:text-2xl font-medium text-slate-400'>
              Building Scalable Frontend Systems & AI Web Apps
            </p>
          </div>

          {/* Bio Summary */}
          <p className='text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed'>
            Frontend engineer with 5+ years of experience shipping production web applications in React, TypeScript, and GraphQL. Specializing in state management, franchise management modules (Compliance & Audits), custom component libraries, and production RAG pipelines.
          </p>

          {/* Action Buttons & Social Links */}
          <div className='pt-2 flex flex-wrap items-center gap-4'>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0'
            >
              <span>View Projects</span>
              <FaChevronRight className='h-3.5 w-3.5' />
            </a>

            <a
              href='mailto:p4avinashkumar@gmail.com'
              className='inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium px-5 py-3 rounded-full text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5'
            >
              <FaEnvelope className='h-4 w-4 text-emerald-400' />
              <span>Contact Me</span>
            </a>

            {/* Social Icons */}
            <div className='flex items-center gap-2 pl-2 border-l border-slate-800 ml-1'>
              <div className='relative group'>
                <a
                  href='https://github.com/p4avinash'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub Profile'
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all duration-200 block'
                >
                  <FaGithubSquare className='h-5 w-5' />
                </a>
                <Tooltip label='GitHub' />
              </div>

              <div className='relative group'>
                <a
                  href='https://www.linkedin.com/in/p4avinash/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn Profile'
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all duration-200 block'
                >
                  <FaLinkedin className='h-5 w-5' />
                </a>
                <Tooltip label='LinkedIn' />
              </div>

              <div className='relative group'>
                <a
                  href='https://medium.com/@p4avinash'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Medium Articles'
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all duration-200 block'
                >
                  <FaMedium className='h-5 w-5' />
                </a>
                <Tooltip label='Medium' />
              </div>

              <div className='relative group'>
                <a
                  href={resume}
                  download='Avinash_Kumar_Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Download Resume PDF'
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all duration-200 block'
                >
                  <FaFilePdf className='h-5 w-5' />
                </a>
                <Tooltip label='Download Resume' />
              </div>
            </div>
          </div>

          {/* Metric Highlights Grid */}
          <div className='pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-900'>
            {heroMetrics.map((metric) => (
              <div key={metric.id} className='bg-slate-900/50 border border-slate-800/80 p-3.5 rounded-xl text-center backdrop-blur-sm'>
                <div className='text-2xl sm:text-3xl font-extrabold text-emerald-400'>
                  {metric.value}
                </div>
                <div className='text-xs text-slate-400 mt-1 font-medium'>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Hero Visual Graphic */}
        <article className='lg:col-span-5 flex justify-center'>
          <div className='relative w-full max-w-md'>
            <div className='absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl'></div>
            <div className='relative bg-slate-900/80 border border-slate-800 p-6 rounded-3xl backdrop-blur-md shadow-2xl space-y-4'>
              <div className='flex items-center gap-2 border-b border-slate-800 pb-3'>
                <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
                <div className='w-3 h-3 rounded-full bg-emerald-500/80'></div>
                <span className='ml-2 text-xs font-mono text-slate-400'>Avinash.profile.tsx</span>
              </div>
              <img src={heroImg} alt='Developer Illustration' className='w-full h-64 sm:h-72 object-contain py-2' />
              <div className='bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1'>
                <p className='text-emerald-400'>const developer = &#123;</p>
                <p className='pl-4 text-slate-300'>name: <span className='text-cyan-300'>&apos;Avinash Kumar&apos;</span>,</p>
                <p className='pl-4 text-slate-300'>role: <span className='text-cyan-300'>&apos;Frontend Engineer&apos;</span>,</p>
                <p className='pl-4 text-slate-300'>experienceYears: <span className='text-emerald-400'>5</span>,</p>
                <p className='pl-4 text-slate-300'>stack: [<span className='text-cyan-300'>&apos;React&apos;</span>, <span className='text-cyan-300'>&apos;TypeScript&apos;</span>, <span className='text-cyan-300'>&apos;GraphQL&apos;</span>, <span className='text-cyan-300'>&apos;GitHub Actions&apos;</span>],</p>
                <p className='text-emerald-400'>&#125;</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero

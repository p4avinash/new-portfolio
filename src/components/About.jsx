import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"
import { education, certifications } from "../data"
import { FaGraduationCap, FaAward, FaCheckCircle } from "react-icons/fa"

const About = () => {
  return (
    <section className='bg-slate-950 py-20 text-slate-100 border-b border-slate-900' id='about'>
      <div className='align-element'>
        <SectionTitle text='about & background' subtitle='Get To Know Me' />
        
        <div className='grid lg:grid-cols-12 items-center gap-12 mt-8'>
          {/* Left Column: Illustration & Quick Stats */}
          <div className='lg:col-span-5 flex flex-col items-center justify-center space-y-6'>
            <div className='relative w-full max-w-sm p-4 bg-slate-900/60 border border-slate-800 rounded-3xl backdrop-blur-md shadow-2xl'>
              <img src={aboutSvg} alt='About Avinash' className='w-full h-64 object-contain' />
            </div>

            {/* Quick Certifications Badges */}
            <div className='w-full max-w-sm space-y-3'>
              {certifications.map((cert) => (
                <div key={cert.id} className='bg-slate-900/40 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-sm'>
                  <div className='w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0'>
                    <FaAward className='h-4 w-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-bold text-slate-100'>{cert.title}</h4>
                    <p className='text-xs text-slate-400'>{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Education Card */}
          <div className='lg:col-span-7 space-y-6'>
            <div className='glass-panel p-6 sm:p-8 rounded-2xl space-y-4'>
              <h3 className='text-2xl font-bold text-slate-100 tracking-tight'>
                Engineering scalable web apps & AI workflows with precision
              </h3>
              
              <p className='text-slate-300 leading-relaxed text-sm sm:text-base'>
                Frontend engineer with over 5 years of experience building business-critical modules end to end — from state management and nested routing to GraphQL API layers and third-party automated workflows.
              </p>

              <p className='text-slate-300 leading-relaxed text-sm sm:text-base'>
                At <span className='text-emerald-400 font-semibold'>Delightree</span>, I built flagship franchise management modules — Compliance, Audits, and Training Paths — streamlining document workflows, employee training, performance tracking, and 3rd-party integrations that slashed customer onboarding time by <span className='text-emerald-400 font-semibold'>60–70%</span>.
              </p>

              <p className='text-slate-300 leading-relaxed text-sm sm:text-base'>
                Beyond core frontend engineering, I build production <span className='text-emerald-400 font-semibold'>Retrieval-Augmented Generation (RAG)</span> applications powered by Pinecone vector databases, Groq LLMs, and semantic search workflows.
              </p>

              <div className='pt-2 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 font-medium'>
                <div className='flex items-center gap-2'>
                  <FaCheckCircle className='text-emerald-400 shrink-0' />
                  <span>5+ Years Industry Experience</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FaCheckCircle className='text-emerald-400 shrink-0' />
                  <span>React, TypeScript & GraphQL</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FaCheckCircle className='text-emerald-400 shrink-0' />
                  <span>AI & RAG Applications</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FaCheckCircle className='text-emerald-400 shrink-0' />
                  <span>Compliance, Audits & Training</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className='glass-panel p-6 rounded-2xl flex items-start gap-4'>
              <div className='w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1'>
                <FaGraduationCap className='h-6 w-6' />
              </div>
              <div className='space-y-1'>
                <span className='text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold'>
                  Education
                </span>
                <h4 className='text-lg font-bold text-slate-100'>
                  {education.degree}
                </h4>
                <p className='text-sm text-slate-400'>
                  {education.institution} · {education.location}
                </p>
                <p className='text-xs text-slate-400 font-mono pt-1'>
                  {education.graduation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

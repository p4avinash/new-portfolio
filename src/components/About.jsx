import { motion } from "framer-motion"
import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"
import { education, certifications } from "../data"
import { FaGraduationCap, FaAward, FaCheckCircle } from "react-icons/fa"

const About = () => {
  return (
    <section className='bg-slate-950 py-20 text-slate-100 border-b border-slate-900 overflow-hidden' id='about'>
      <div className='align-element'>
        <SectionTitle text='about & background' subtitle='Get To Know Me' />
        
        <div className='grid lg:grid-cols-12 items-center gap-12 mt-8'>
          {/* Left Column: Illustration & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='lg:col-span-5 flex flex-col items-center justify-center space-y-6'
          >
            <div className='relative w-full max-w-sm p-4 bg-slate-900/60 border border-slate-800 rounded-3xl backdrop-blur-md shadow-2xl animate-float-slow hover:border-emerald-500/30 transition-colors duration-300'>
              <div className='absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-lg -z-10 animate-glow-pulse'></div>
              <img src={aboutSvg} alt='About Avinash' className='w-full h-64 object-contain drop-shadow-md' />
            </div>

            {/* Quick Certifications Badges */}
            <div className='w-full max-w-sm space-y-3'>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                  className='bg-slate-900/40 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center gap-3 backdrop-blur-sm transition-colors'
                >
                  <div className='w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm'>
                    <FaAward className='h-4 w-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-bold text-slate-100'>{cert.title}</h4>
                    <p className='text-xs text-slate-400'>{cert.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Narrative & Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='lg:col-span-7 space-y-6'
          >
            <div className='glass-panel p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl'>
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
                <div className='flex items-center gap-2 group/item'>
                  <FaCheckCircle className='text-emerald-400 shrink-0 group-hover/item:scale-110 transition-transform' />
                  <span>5+ Years Industry Experience</span>
                </div>
                <div className='flex items-center gap-2 group/item'>
                  <FaCheckCircle className='text-emerald-400 shrink-0 group-hover/item:scale-110 transition-transform' />
                  <span>React, TypeScript & GraphQL</span>
                </div>
                <div className='flex items-center gap-2 group/item'>
                  <FaCheckCircle className='text-emerald-400 shrink-0 group-hover/item:scale-110 transition-transform' />
                  <span>AI & RAG Applications</span>
                </div>
                <div className='flex items-center gap-2 group/item'>
                  <FaCheckCircle className='text-emerald-400 shrink-0 group-hover/item:scale-110 transition-transform' />
                  <span>Compliance, Audits & Training</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              transition={{ duration: 0.2 }}
              className='glass-panel p-6 rounded-2xl flex items-start gap-4 transition-colors shadow-lg'
            >
              <div className='w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1 shadow-sm'>
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


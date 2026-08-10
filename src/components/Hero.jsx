import { motion } from "framer-motion"
import heroImg from "../assets/hero.svg"
import { FaGithubSquare, FaLinkedin, FaFilePdf, FaMedium, FaEnvelope, FaChevronRight } from "react-icons/fa"
import resume from "../resume/Avinash_Kumar_Resume_Final_2026.pdf"

const Tooltip = ({ label }) => (
  <span className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none bg-slate-900 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-2xl whitespace-nowrap z-20 tracking-wide border border-slate-800'>
    {label}
    <span className='absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-900'></span>
  </span>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const Hero = () => {
  return (
    <section id='home' className='relative bg-slate-950 text-slate-100 py-16 sm:py-24 overflow-hidden border-b border-slate-900'>

      {/* Subtle Background Ambient Lighting */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none animate-glow-pulse'></div>
      <div className='absolute bottom-10 right-10 w-[300px] h-[200px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none animate-glow-pulse' style={{ animationDelay: "2.5s" }}></div>

      <div className='align-element relative z-10 grid lg:grid-cols-12 items-center gap-12'>
        <motion.article
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='lg:col-span-7 space-y-6'
        >
          {/* Status Pill */}
          <motion.div variants={itemVariants} className='inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-medium text-violet-300 backdrop-blur-md shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-violet-400 animate-pulse'></span>
            <span>Frontend Engineer | React · TypeScript · Next.js</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <h1 className='text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight'>
              Hi, I&apos;m <span className='gradient-text'>Avinash Kumar</span>
            </h1>
            <p className='text-xl sm:text-2xl font-bold text-slate-200 tracking-tight'>
              Building scalable, production-grade web products.
            </p>
          </motion.div>

          {/* Bio Summary */}
          <motion.p variants={itemVariants} className='text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed'>
            Frontend Engineer with 5+ years of production experience building and owning business-critical web applications end-to-end. Specializing in scalable React architecture, complex state management, GraphQL layers, enterprise integrations, and modern AI workflows.
          </motion.p>

          {/* Action Buttons & Social Links */}
          <motion.div variants={itemVariants} className='pt-2 flex flex-wrap items-center gap-3.5'>
            <motion.a
              href='#experience'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 focus-ring'
            >
              <span>View Experience</span>
              <FaChevronRight className='h-3.5 w-3.5' />
            </motion.a>

            <motion.a
              href='#projects'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium px-5 py-3 rounded-full text-sm sm:text-base transition-colors duration-200 focus-ring'
            >
              <span>View Selected Work</span>
            </motion.a>

            <motion.a
              href={resume}
              download='Avinash_Kumar_Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-violet-400 border border-violet-500/30 font-medium px-5 py-3 rounded-full text-sm sm:text-base transition-colors duration-200 focus-ring'
            >
              <FaFilePdf className='h-4 w-4' />
              <span>Download Resume</span>
            </motion.a>


            {/* Social Icons */}
            <div className='flex items-center gap-2 pl-2 border-l border-slate-800 ml-1'>
              <div className='relative group'>
                <motion.a
                  href='https://github.com/p4avinash'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub Profile'
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-violet-500/50 text-slate-400 hover:text-violet-400 transition-colors block focus-ring'
                >
                  <FaGithubSquare className='h-5 w-5' />
                </motion.a>
                <Tooltip label='GitHub' />
              </div>

              <div className='relative group'>
                <motion.a
                  href='https://www.linkedin.com/in/p4avinash/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn Profile'
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-violet-500/50 text-slate-400 hover:text-violet-400 transition-colors block focus-ring'
                >
                  <FaLinkedin className='h-5 w-5' />
                </motion.a>
                <Tooltip label='LinkedIn' />
              </div>

              <div className='relative group'>
                <motion.a
                  href='https://medium.com/@p4avinash'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Medium Articles'
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-violet-500/50 text-slate-400 hover:text-violet-400 transition-colors block focus-ring'
                >
                  <FaMedium className='h-5 w-5' />
                </motion.a>
                <Tooltip label='Medium' />
              </div>

              <div className='relative group'>
                <motion.a
                  href='mailto:p4avinashkumar@gmail.com'
                  aria-label='Email Avinash'
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-violet-500/50 text-slate-400 hover:text-violet-400 transition-colors block focus-ring'
                >
                  <FaEnvelope className='h-5 w-5' />
                </motion.a>
                <Tooltip label='Email Direct' />
              </div>
            </div>
          </motion.div>
        </motion.article>

        {/* Hero Visual Graphic Card */}
        <motion.article
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className='lg:col-span-5 flex justify-center'
        >
          <div className='relative w-full max-w-md animate-float-slow'>
            <div className='absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-20 blur-xl animate-glow-pulse'></div>
            <div className='relative bg-slate-900/80 border border-slate-800 p-6 rounded-3xl backdrop-blur-md shadow-2xl space-y-4 hover:border-violet-500/30 transition-colors duration-300'>
              <div className='flex items-center justify-between border-b border-slate-800 pb-3'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
                  <div className='w-3 h-3 rounded-full bg-emerald-500/80'></div>
                  <span className='ml-2 text-xs font-mono text-slate-400'>Avinash.engineer.ts</span>
                </div>
              </div>


              <img src={heroImg} alt='Senior Frontend Engineer Graphic Illustration' className='w-full h-52 sm:h-60 object-contain py-1 drop-shadow-md' />

              <div className='bg-slate-950/90 p-3.5 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1 shadow-inner overflow-x-auto'>
                <p className='text-violet-400'>interface <span className='text-purple-300'>SeniorEngineer</span> &#123;</p>
                <p className='pl-4 text-slate-300'>name: <span className='text-purple-300'>&apos;Avinash Kumar&apos;</span>;</p>
                <p className='pl-4 text-slate-300'>title: <span className='text-purple-300'>&apos;Frontend Engineer&apos;</span>;</p>
                <p className='pl-4 text-slate-300'>experienceYears: <span className='text-violet-400'>5</span>;</p>
                <p className='pl-4 text-slate-300'>architecture: [<span className='text-purple-300'>&apos;React&apos;</span>, <span className='text-purple-300'>&apos;TypeScript&apos;</span>, <span className='text-purple-300'>&apos;GraphQL&apos;</span>];</p>
                <p className='pl-4 text-slate-300'>impact: <span className='text-purple-300'>&apos;Slashed Onboarding by 60-70%&apos;</span>;</p>
                <p className='text-violet-400'>&#125;</p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export default Hero

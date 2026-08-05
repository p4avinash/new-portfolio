import heroImg from "../assets/hero.svg"
import { FaGithubSquare, FaLinkedin, FaFilePdf } from "react-icons/fa"
import resume from "../resume/Avinash_Kumar_Resume_Final_2026.pdf"

const Tooltip = ({ label }) => (
  <span className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-2xl whitespace-nowrap z-10 tracking-wide'>
    {label}
    <span className='absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-800'></span>
  </span>
)

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Avinash</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Web Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4 items-center'>

            <div className='relative group'>
              <a href='https://github.com/p4avinash' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
              <Tooltip label='GitHub' />
            </div>

            <div className='relative group'>
              <a href='https://www.linkedin.com/in/p4avinash/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
              <Tooltip label='LinkedIn' />
            </div>

            <div className='relative group'>
              <a href={resume} download='Avinash_Kumar_Resume.pdf' target='_blank' rel='noopener noreferrer' aria-label='Download Resume'>
                <FaFilePdf className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
              <Tooltip label='Download Resume' />
            </div>

          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  )
}
export default Hero

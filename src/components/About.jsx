import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Hi, there! I'm a Web Developer, with experience in JavaScript, and
            expertise in frameworks like React.js. I'm a quick learner and
            collaborate closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problems. Let's work
            together to bring your ideas to life!
          </p>
        </article>
      </div>
    </section>
  )
}
export default About

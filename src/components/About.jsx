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
            Hi, I'm a React & TypeScript Developer passionate about building
            modern, scalable web applications. Alongside frontend development,
            I'm exploring AI by building Retrieval-Augmented Generation (RAG)
            applications powered by vector databases, embeddings, and Large
            Language Models. I enjoy solving real-world problems, learning new
            technologies, and creating fast, intuitive user experiences!
          </p>
        </article>
      </div>
    </section>
  )
}
export default About

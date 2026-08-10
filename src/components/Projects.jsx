import { motion } from 'framer-motion';
import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Projects = () => {
  return (
    <section className='py-20 bg-slate-950 text-slate-100 border-b border-slate-900' id='projects'>
      <div className='align-element'>
        <SectionTitle text='Selected Engineering Work' subtitle='Production Products & Web Architectures' />
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-8'
        >
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

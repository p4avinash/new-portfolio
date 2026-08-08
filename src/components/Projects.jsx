import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className='py-20 bg-slate-950 text-slate-100' id='projects'>
      <div className='align-element'>
        <SectionTitle text='featured projects & web creations' subtitle='Portfolio Showcase' />
        <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className='py-20 bg-slate-950 text-slate-100 border-b border-slate-900' id='skills'>
      <div className='align-element'>
        <SectionTitle text='tech stack & capabilities' subtitle='Core Competencies' />
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

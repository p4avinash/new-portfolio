import { experiences } from '../data';
import SectionTitle from './SectionTitle';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section className='py-20 bg-slate-950 text-slate-100 border-b border-slate-900' id='experience'>
      <div className='align-element'>
        <SectionTitle text='work experience' subtitle='Professional Journey' />
        <div className='max-w-4xl mx-auto mt-12'>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              {...exp}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

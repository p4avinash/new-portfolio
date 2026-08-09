import { motion } from 'framer-motion';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Skills = () => {
  return (
    <section className='py-20 bg-slate-950 text-slate-100 border-b border-slate-900' id='skills'>
      <div className='align-element'>
        <SectionTitle text='tech stack & capabilities' subtitle='Core Competencies' />
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'
        >
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


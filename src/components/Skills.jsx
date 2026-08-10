import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <section className='py-20 bg-slate-950 text-slate-100 border-b border-slate-900' id='skills'>
      <div className='align-element'>
        <SectionTitle text='Technical Expertise & Capabilities' subtitle='Categorized Engineering Stack' />
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {skillCategories.map((category) => {
            return <SkillsCard key={category.id} {...category} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

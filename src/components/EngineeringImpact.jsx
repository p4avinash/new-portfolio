import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { engineeringImpact } from "../data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const EngineeringImpact = () => {
  return (
    <section className='bg-slate-950 py-16 sm:py-20 text-slate-100 border-b border-slate-900 overflow-hidden' id='impact'>
      <div className='align-element'>
        <SectionTitle text='Engineering Impact' subtitle='Measurable Production Achievements' />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-60px" }}
          className='mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6'

        >
          {engineeringImpact.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: "rgba(139, 92, 246, 0.4)" }}
              transition={{ duration: 0.2 }}
              className='glass-card bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90 p-6 sm:p-7 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-t-violet-500/60 shadow-xl group'
            >
              <div className='space-y-2'>
                <div className='text-3xl sm:text-4xl font-extrabold tracking-tight text-violet-400 group-hover:text-purple-300 transition-colors'>
                  {item.value}
                </div>
                <h3 className='text-base sm:text-lg font-bold text-slate-100 tracking-tight leading-snug'>
                  {item.metric}
                </h3>
              </div>
              <p className='text-xs sm:text-sm text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EngineeringImpact

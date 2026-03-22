import { motion } from 'framer-motion';

const skillsData = {
  Languages: [
    { name: 'C++', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 75 },
  ],
  Web: [
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Express', level: 80 },
    { name: 'HTML/CSS', level: 95 },
  ],
  'ML / AI': [
    { name: 'TensorFlow', level: 75 },
    { name: 'Keras', level: 75 },
    { name: 'NumPy / Pandas', level: 70 },
  ],
  Tools: [
    { name: 'MongoDB', level: 70 },
    { name: 'MySQL', level: 75 },
    { name: 'Git / Ubuntu', level: 80 },
  ],
};

const SkillCategory = ({ title, skills, colorClass, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="mb-8"
  >
    <h3 className={`text-xl font-pixel ${colorClass} mb-4 text-xs tracking-widest uppercase`}>
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <div className="flex justify-between text-sm mb-1 text-gray-300 font-light">
            <span>{skill.name}</span>
            <span className={colorClass}>{skill.level}%</span>
          </div>
          <div className="w-full bg-dark-700 h-2 rounded-full overflow-hidden border border-dark-600">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: delay + index * 0.1 }}
              className={`h-full ${title === 'ML / AI' || title === 'Tools' ? 'bg-neon-purple shadow-[0_0_10px_#8a2be2]' : 'bg-neon-blue shadow-[0_0_10px_#00f3ff]'}`}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="mb-10 border-b-2 border-neon-blue pb-4">
        <h2 className="text-3xl font-pixel text-white tracking-widest">TECH_STACK</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div>
          <SkillCategory title="Languages" skills={skillsData.Languages} colorClass="text-neon-blue" delay={0.1} />
          <SkillCategory title="ML / AI" skills={skillsData['ML / AI']} colorClass="text-neon-purple" delay={0.3} />
        </div>
        <div>
          <SkillCategory title="Web" skills={skillsData.Web} colorClass="text-neon-blue" delay={0.2} />
          <SkillCategory title="Tools" skills={skillsData.Tools} colorClass="text-neon-purple" delay={0.4} />
        </div>
      </div>
    </div>
  );
};

export default Skills;

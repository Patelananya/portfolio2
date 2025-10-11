import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Smartphone, Globe, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'C'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Server,
      title: 'Frameworks & Libraries',
      skills: ['Flask', 'TensorFlow', 'Keras', 'Seaborn'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['SQL', 'MySQL'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Layers,
      title: 'DevOps & Tools',
      skills: ['Git/GitHub', 'VS Code', 'Docker (Basics)'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Smartphone,
      title: 'Other Skills',
      skills: [
        'Machine Learning',
        'Data Science',
        'OOP',
        'Operating Systems',
        'DBMS',
        'Computer Networks',
      ],
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { type: 'tween', duration: 0.2 },
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                {/* Icon */}
                <motion.div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}
                  whileHover={{ scale: 1.2, transition: { type: 'tween', duration: 0.2 } }}
                >
                  <category.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}
                    ></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      type: 'work',
      title: 'Junior python developer',
      company: 'Oasis Info Byte',
      location: 'New Delhi, India',
      period: 'june 2024 - december 2024',
      description: 'Worked in developing a Machine learning model and also cleaned the datasets for easier computations.',
      achievements: [
        'Designed and deployed Python scripts to automate 50+ repetitive workflows, enhancing overall team efficiency by 25%.',
        'Cleaned, analyzed, and visualized datasets of 15,000+ records using pandas, NumPy, and Matplotlib to uncover trends and actionable insights.',
        'laborated with senior developers to debug and test 10+ Python modules, ensuring 100% reliability of deployed scripts'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science speliaze in AI&ML',
      company: 'Sumathi Reddy institute of Technology for women.',
      location: 'Telengana, India`',
      period: '2022 - 2026',
      description: 'Currentlu in final year of my undergraduation degree.',
      achievements: [
        'GPA: 8.2/10.0 (until my 6th semester).',
        'Sever as Coding club coordinator for 2 semesters.',
        'Finalist in 24 hour hackathon conducted by our college.'
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10 border-4 border-white dark:border-gray-900"></div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${
                      experience.type === 'work' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-500'
                    } text-white mr-4`}>
                      {experience.type === 'work' ? (
                        <Briefcase className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>

                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
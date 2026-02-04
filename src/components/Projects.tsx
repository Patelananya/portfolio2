import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'Chatbot (Hugging Face)',
      description: 'Built a full-stack AI chatbot that performs web searches and provides cited answers using a custom-built retrieval-augmented generation (RAG) pipeline. The project integrates a TinyLlama language model with web-scraping tools (googlesearch-python and newspaper3k) and a Gradio front-end for a live, interactive demo.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'Transformers', 'Hugging Face', 'JavaScript'],
      github: 'https://github.com/Patelananya/chatbot-huggingface',
      live: 'https://huggingface.co/spaces/Patelananya/chatbot',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a fully responsive personal portfolio website showcasing projects, skills, and experience. Implemented dark/light mode, smooth scrolling, and interactive animations for enhanced UX.',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/Patelananya/portfolio2',
      live: 'https://patelananya.github.io/',
      featured: false
    },
    {
      title: 'Digital Complaint Box',
      description: 'Designed and developed a full-stack web application to manage and track campus facility complaints. Enabled users to raise issues, monitor status updates, and provided admins with role-based access for assignment and resolution. Focused on secure authentication, scalable APIs, and a clean, responsive UI.',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
      github: 'https://github.com/Patelananya/digital-complaint-box-deployment',
      live: 'https://digital-complaint-box-deployment-yz.vercel.app/',
      featured: true
    },
    {
      title: 'Company Website with Admin Job Portal',
      description: 'Built and deployed a full-stack company website featuring a Careers module where users can view job openings and apply online. Developed a secure admin dashboard with JWT-based authentication to manage job postings and review applications, focusing on scalable APIs and cloud-based data persistence.',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose'],
      github: 'https://github.com/Patelananya',
      live: 'https://arah-frontend.vercel.app',
      featured: true
    },
    {
      title: 'Handwritten Digit Recognition',
      description: 'Engineered a robust CNN deep learning model to precisely recognize handwritten digits from the MNIST dataset, achieving 98.6% prediction accuracy through advanced preprocessing, optimized training strategies, and regularization techniques.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/Patelananya/handwritten-digit-recognition',
      live: '',
      featured: true
    },
    {
      title: 'Movie Recommendation System',
      description: 'Built an end-to-end web application that intelligently recommends movies based on historical popularity trends from 1950–2016. Optimized recommendation speed and enhanced user experience through refined algorithms, data analysis, and system improvements.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'Machine Learning', 'Seaborn', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Patelananya/movie-recommendation-system',
      live: '',
      featured: true
    },
    {
      title: 'Iris Flower Detection System',
      description: 'Developed a web-based Iris Flower Detection System in 4 weeks. Classified flowers into species using Decision Tree, Logistic Regression, Random Forest, KNN, SVM, and Gradient Boosting models with thorough evaluation metrics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'Machine Learning', 'Seaborn', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Patelananya/iris-flower-detection',
      live: '',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Patelananya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            <Eye className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

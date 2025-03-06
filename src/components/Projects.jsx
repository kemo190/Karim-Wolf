import { motion } from 'framer-motion';

function Projects() {
    return (
      <motion.section id="projects" className="py-20 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects 🚀</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p>My personal website to showcase my skills and projects.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-2">E-Commerce Store</h3>
            <p>An online store built with React and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-2">Blog Platform</h3>
            <p>A simple blog to share tech articles and tutorials.</p>
          </div>
        </div>
      </motion.section>
    );
  }
  
  export default Projects;
  
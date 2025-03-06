import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">My Skills 💼</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">HTML</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">CSS</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">JavaScript</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">React</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">Tailwind</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">Flutter</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">Python</div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">Figma</div>
      </div>
    </motion.section>
  );
}

export default Skills;

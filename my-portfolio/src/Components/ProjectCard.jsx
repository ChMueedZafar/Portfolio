import { motion } from 'framer-motion';

function ProjectCard({ title, description, liveLink, githubLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md p-6 border hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-4 text-sm">
        <a href={liveLink} target="_blank" rel="noreferrer" className="text-blue-600 underline">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer" className="text-gray-600 underline">
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

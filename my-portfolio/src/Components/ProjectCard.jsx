import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, liveLink, githubLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/60 backdrop-blur-md shadow-xl border border-white/30 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="pt-4 space-y-3">
        <h3 className="text-xl font-bold text-blue-700">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between items-center text-sm pt-2">
          <a href={liveLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            🔗 Live.
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer" className="text-gray-600 hover:underline">
            💻 GitHub.
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

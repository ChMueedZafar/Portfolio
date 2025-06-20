import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm Abdul Mueed , a full-stack web developer with a passion for creating
          beautiful and functional web applications. I specialize in React, Tailwind, and JavaScript.
          I love solving real-world problems and continuously improving my craft.
        </p>
      </motion.div>
    </section>
  );
}

export default About;

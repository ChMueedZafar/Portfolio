import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
          Hi, I’m MueedZafar 👋
        </h1>
        <p className="text-lg text-gray-600">
          Web Developer • React Enthusiast • Problem Solver
        </p>
      </motion.div>
    </section>
  );
}

export default Home;

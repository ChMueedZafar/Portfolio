import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import Blob from '../Components/Blob'; // 👈 Import the blob component

function Home() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      
      {/* 🫧 Floating Blobs */}
      <Blob className="w-72 h-72 bg-purple-300 dark:bg-purple-600 top-0 -left-20 z-0" />
      <Blob className="w-72 h-72 bg-pink-300 dark:bg-pink-600 bottom-0 -right-20 z-0" />

      {/* ✅ Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 dark:text-white mb-4">
            Hi, I'm Abdul Mueed Zafar
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            A full-stack developer passionate about crafting elegant, user-friendly web experiences.
            I specialize in React, Tailwind CSS, and modern JavaScript.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="Mueed Zafar Developer"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;

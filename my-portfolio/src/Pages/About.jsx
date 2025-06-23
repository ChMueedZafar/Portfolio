import { motion } from 'framer-motion';
import aboutImg from '../assets/aboutimg.png'; // 👈 Add your photo or a dev illustration

function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src={aboutImg}
            alt="About Me"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            I'm a passionate full-stack web developer who loves turning ideas into reality with code.
            With a strong foundation in React, Tailwind CSS, Redux, and REST APIs, I’ve built multiple real-world projects including a restaurant app and an e-commerce platform.
          </p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>🧠 100+ LeetCode questions solved</li>
            <li>🚀 Strong in JavaScript, Python & React</li>
            <li>🛠️ Mentored by Sir Naveed Sarwar at TechloSet</li>
            <li>📱 Building responsive, animated, user-friendly apps</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

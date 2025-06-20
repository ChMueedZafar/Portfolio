import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="px-6 py-16 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-700 mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input type="text" placeholder="Your name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Your email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea rows="5" placeholder="Your message..." className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;

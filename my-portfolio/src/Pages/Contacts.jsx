import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vgcdsu3', 
      'template_y14jm4k', 
      formRef.current,
      'YaPMIPghtn5j4BGJY' 
    ).then(
      () => {
        alert('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <section className="px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
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
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message..."
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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

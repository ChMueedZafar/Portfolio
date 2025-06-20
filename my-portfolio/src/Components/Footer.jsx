function Footer() {
  return (
    <footer className="bg-blue-700 text-white text-center py-6 mt-20">
      <p className="text-lg font-semibold">© {new Date().getFullYear()} Abdul Mueed</p>
      <div className="flex justify-center mt-4 gap-6">
        <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="hover:text-gray-300">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="hover:text-gray-300">
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com" className="hover:text-gray-300">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import ProjectCard from '../Components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A feature-rich e-commerce platform with cart, auth, and product filtering.",
      liveLink: "https://your-live-demo.com",
      githubLink: "https://github.com/yourusername/ecommerce-app",
    },
    {
      title: "Restaurant App",
      description: "Full-stack restaurant site with menu, auth, order system, and admin panel.",
      liveLink: "https://your-live-demo.com",
      githubLink: "https://github.com/yourusername/restaurant-app",
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="px-6 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import ProjectCard from '../Components/ProjectCard';
// import ecommerce from '../assets/ecommerce.jpg';
// import restaurant from '../assets/restaurant.jpg';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Feature-rich e-commerce site with cart, filters, and auth.",
      // image: ecommerce,
      liveLink: "https://your-live-ecommerce.com",
      githubLink: "https://github.com/yourname/ecommerce",
    },
    {
      title: "Restaurant App",
      description: "React-based full-stack app with menu, orders, and admin panel.",
      // image: restaurant,
      liveLink: "https://your-restaurant-demo.com",
      githubLink: "https://github.com/yourname/restaurant",
    },
    // Add more projects as needed
  ];

  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">My Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

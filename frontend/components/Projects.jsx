import React from "react";
import { ExternalLink, Folder, Github,  Projector,  User } from "lucide-react"; 

const projects = [
  {
    title: "AgroAssist",
    description: "A farmer support portal built with MERN stack to provide crop insights, market prices, and weather updates.",
    image: "agroAssist.png",
    live: "https://your-live-demo-link.com",
    github: "https://github.com/your-repo/agroassist",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing skills, projects, and achievements with a modern responsive UI.",
    image: "portfolio1.png",
    live: "https://your-portfolio-link.com",
    github: "https://github.com/your-repo/portfolio",
  },
  {
    title: "DeepSeek Clone",
    description: "An AI-powered chat application inspired by DeepSeek, built with React and Express backend.",
    image: "deepseek.png",
    live: "https://deepseek-clone-demo.com",
    github: "https://github.com/your-repo/deepseek-clone",
  },
];

function Projects() {
  return (
    <div id="projects" className="min-h-screen py-20 px-6 flex flex-col items-center ">
      <h1 className="flex items-center text-6xl font-bold text-gray-800 mb-20 gap-2">
        <Folder className="w-14 h-14"/>Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-67 object-cover transition duration-300 hover:scale-95"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-2 text-sm">{project.description}</p>

              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <span className="bg-gray-200 py-1 pr-4 pl-2 rounded-full flex gap-2 items-center ">
                    <Github className="w-4 h-4" />Github</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm  hover:text-blue-800"
                >
                <span className="bg-gray-200 py-1 pr-4 pl-2 rounded-full flex gap-2 items-center">
                  <ExternalLink className="w-4 h-4" />Live</span>
                </a>
                
              </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

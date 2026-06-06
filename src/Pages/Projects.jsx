import React from "react";

const Project = () => {
  const projects = [
    {
      name: "AlgoVerse",
      description:
        "AlgoVerse is a coding-focused platform for learning Data Structures and Algorithms. It includes an admin panel that allows admins to add, update, and manage problems/content, ensuring controlled access and scalable content management.",
      github: "https://github.com/Anikettiw-at/AlgoVerse",
      live: "https://frontend-coding-roan.vercel.app/",
      date: "June 2025",
      techStack: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JavaScript",
        "Redis",
        "Multer",
        "Cloudinary",
        "CSS",
        "Tailwind CSS",
        "JWT",
        "Bcrypt",   
        "Role-Based Access Control",
      ],
      tools: ["VS Code", "GitHub"],
      contributors: ["Aniket Tiwari"],
    },
    {
      name: "Connectify",
      description:
        "A full-stack social media application designed to maximize user connection and engagement. Features a robust authentication system (JWT & Bcrypt), personalized user profiles, and seamless multimedia post-sharing via Multer and Cloudinary. Engineered with an interactive UI to support real-time-like social feeds and secure content management.",
      github: "https://github.com/Anikettiw-at/socialmediahm",
      live: "https://socialmediahm.vercel.app/",
      date: "December 2024",
      techStack: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Bcrypt",
        "Multer",
        "Cloudinary",
      ],
      tools: ["VS Code", "Postman", "MongoDB Atlas"],
      contributors: ["Aniket Tiwari"],
    },
  ];

  return (
    <div className="p-6 text-white max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">My Projects</h2>

      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl transition-all hover:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <h3 className="text-2xl font-bold text-blue-400">
                {project.name}
              </h3>
              <span className="text-sm text-gray-500 font-medium">
                {project.date}
              </span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-400 block mb-2">Tech Stack:</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <span className="text-sm font-semibold text-gray-400 block mb-2">Tools:</span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-0.5 rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-800">
              <span className="text-xs text-gray-500">
                <strong>Contributor:</strong> {project.contributors.join(", ")}
              </span>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-sm font-medium text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-sm font-medium text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
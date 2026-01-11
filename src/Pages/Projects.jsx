import React from "react";

const Project = () => {
  const projects = [
    {
      name: "AlgoVerse",
      description:
        "AlgoVerse is a coding-focused platform for learning Data Structures and Algorithms. It includes an admin panel that allows admins to add, update, and manage problems/content, ensuring controlled access and scalable content management.",
      github: "https://github.com/Anikettiw-at/AlgoVerse",
      live: "https://frontend-coding-roan.vercel.app/",
      date: "2025",
      techStack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Role-Based Access Control",
      ],
      tools: ["VS Code", "GitHub"],
      contributors: ["Aniket Tiwari"],
    },
    {
      name: "Job Portal",
      description:
        "Role-based MERN job portal with secure authentication, resume uploads, and employer–candidate workflows. Supports JWT-based auth and file handling using Multer and Cloudinary.",
      github: "https://github.com/Anikettiw-at/jobportal",
      live: "https://jobportal-frontend.vercel.app/",
      date: "November 2024",
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
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-b border-gray-700 pb-6"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {project.name}
            </h3>

            <p className="text-gray-300 mb-3">
              {project.description}
            </p>

            <p className="text-gray-400 mb-2">
              <strong>Date:</strong> {project.date}
            </p>

            <p className="text-gray-400 mb-2">
              <strong>Tech Stack:</strong>{" "}
              {project.techStack.join(", ")}
            </p>

            <p className="text-gray-400 mb-2">
              <strong>Tools:</strong> {project.tools.join(", ")}
            </p>

            <p className="text-gray-400 mb-4">
              <strong>Contributor:</strong>{" "}
              {project.contributors.join(", ")}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

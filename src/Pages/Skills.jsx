import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaJava,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiPostman,
  SiFirebase,
  SiCplusplus,
  SiC,
  SiPython,
  SiNextdotjs,
  SiSublimetext,
  SiMysql,
} from "react-icons/si";

const skills = {
  Languages: [
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "C", icon: <SiC className="text-blue-300" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300" /> },
    { name: "Java", icon: <FaJava className="text-red-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  ],
  Frameworks: [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    {
      name: "Sublime Text",
      icon: <SiSublimetext className="text-yellow-400" />,
    },
  ],
  Technologies: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Linux", icon: <FaLinux className="text-white" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  ],
};

export default function SkillPage() {
  return (
    <section className="text-white py-10 px-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-zinc-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">
              {category}
            </h2>

            <div className="space-y-4">
              {items.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

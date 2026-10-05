import { useCallback, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import Lightbox from "../Components/Lightbox";
import { Page } from "../Components/ui";
import { projects, projectCategories } from "../Data/project";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  const count = (cat) =>
    cat === "All" ? projects.length : projects.filter((p) => p.categories.includes(cat)).length;

  return (
    <Page
      eyebrow="Projects"
      title="Things I’ve built"
      subtitle="Production AI systems at work and full-stack products of my own — from real-time voice agents to code-execution platforms."
    >
      <div role="tablist" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              filter === cat
                ? "border-amber-400 bg-amber-400 text-zinc-950"
                : "border-white/10 text-zinc-400 hover:border-white/25 hover:text-white"
            }`}
          >
            {cat}
            <span className={`ml-1.5 text-xs ${filter === cat ? "text-zinc-800" : "text-zinc-600"}`}>
              {count(cat)}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visible.map((project) => (
          <div key={project.name} className={project.images ? "lg:col-span-2" : ""}>
            <ProjectCard project={project} onPreview={setPreview} />
          </div>
        ))}
      </div>

      <Lightbox image={preview} onClose={closePreview} />
    </Page>
  );
};

export default Projects;

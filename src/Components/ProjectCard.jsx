import { FaGithub, FaExternalLinkAlt, FaLock, FaSearchPlus } from "react-icons/fa";
import { Card, Tag } from "./ui";

export default function ProjectCard({ project, onPreview }) {
  const {
    name,
    subtitle,
    badge,
    date,
    description,
    points = [],
    images = [],
    techStack = [],
    github,
    live,
    note,
  } = project;

  return (
    <Card
      as="article"
      className="flex h-full flex-col transition duration-300 hover:-translate-y-0.5 hover:border-amber-400/30"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {badge && (
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
              {badge}
            </p>
          )}
          <h3 className="text-xl font-bold text-white sm:text-2xl">{name}</h3>
          {subtitle && <p className="mt-0.5 text-sm text-cyan-400">{subtitle}</p>}
        </div>
        <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
          {date}
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-zinc-300">{description}</p>

      {images.map((img) => (
        <figure key={img.src} className="mt-5">
          <button
            type="button"
            onClick={() => onPreview(img)}
            aria-label={`Enlarge image: ${img.caption}`}
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-white"
          >
            <img
              src={img.src}
              alt={img.caption}
              loading="lazy"
              className="max-h-80 w-full object-contain transition duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/85 px-3 py-1 text-xs text-white transition sm:opacity-0 sm:group-hover:opacity-100">
              <FaSearchPlus /> Enlarge
            </span>
          </button>
          <figcaption className="mt-2 text-xs text-zinc-500">{img.caption}</figcaption>
        </figure>
      ))}

      {points.length > 0 && (
        <ul className="mt-5 space-y-3">
          {points.map((p) => (
            <li key={p.title} className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <span className="text-zinc-400">
                <span className="font-semibold text-zinc-100">{p.title}: </span>
                {p.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="flex-1" />
      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <FaGithub /> Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
          >
            <FaExternalLinkAlt className="text-xs" /> Live demo
          </a>
        )}
        {note && !github && !live && (
          <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
            <FaLock /> {note}
          </span>
        )}
      </div>
    </Card>
  );
}

import { useCallback, useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaChevronDown,
  FaSearchPlus,
} from "react-icons/fa";
import { experiences } from "../Data/experience";
import Lightbox from "../Components/Lightbox";
import { Page, Card, SubHeading, Tag } from "../Components/ui";

const monthYear = (d) => d.toLocaleDateString("en-US", { month: "short", year: "numeric" });

function duration(start, end) {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`]
    .filter(Boolean)
    .join(" ");
}

function ExperienceItem({ exp, onPreview }) {
  const start = new Date(exp.startDate);
  const end = exp.endDate ? new Date(exp.endDate) : new Date();
  const current = !exp.endDate;
  const work = exp.featured;

  return (
    <li className="relative pl-10 sm:pl-14">
      {/* timeline node */}
      <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-amber-400/40 bg-zinc-950 text-amber-400 sm:h-10 sm:w-10">
        <FaBriefcase className="text-sm sm:text-base" />
      </span>

      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
            <p className="mt-1 text-lg text-zinc-200">
              {exp.company}
              <span className="text-sm text-zinc-500"> · {exp.classification}</span>
            </p>
          </div>
          {current && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Currently working
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2">
            <FaCalendarAlt />
            {monthYear(start)} – {current ? "Present" : monthYear(end)}
            <span className="text-zinc-600">· {duration(start, end)}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <FaMapMarkerAlt /> {exp.location}
          </span>
        </div>

        <p className="mt-4 leading-relaxed text-zinc-300">{exp.summary}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {exp.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-400/30"
            >
              <p className="font-semibold text-white">{h.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{h.text}</p>
            </div>
          ))}
        </div>

        <details className="group mt-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-zinc-300 [&::-webkit-details-marker]:hidden">
            Day-to-day responsibilities
            <FaChevronDown className="text-xs transition-transform group-open:rotate-180" />
          </summary>
          <ul className="grid gap-2 px-4 pb-4 sm:grid-cols-2">
            {exp.responsibilities.map((r) => (
              <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                {r}
              </li>
            ))}
          </ul>
        </details>
      </Card>

      {work && (
        <Card className="mt-6 border-cyan-500/20">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Featured work at {exp.company}
          </p>
          <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="inline-flex items-center gap-3 text-2xl font-bold text-white">
              <FaPhoneAlt className="text-lg text-cyan-400" /> {work.name}
            </h3>
            <span className="text-sm text-zinc-500">{work.date}</span>
          </div>
          <p className="mt-1 text-zinc-400">
            {work.tagline}
            {work.alias && <span className="text-zinc-600"> · internally “{work.alias}”</span>}
          </p>

          {work.image && (
            <figure className="mt-5">
              <button
                type="button"
                onClick={() => onPreview(work.image)}
                aria-label="Enlarge architecture diagram"
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-white"
              >
                <img
                  src={work.image.src}
                  alt={work.image.caption}
                  loading="lazy"
                  className="max-h-96 w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/85 px-3 py-1 text-xs text-white transition sm:opacity-0 sm:group-hover:opacity-100">
                  <FaSearchPlus /> Enlarge
                </span>
              </button>
              <figcaption className="mt-2 text-xs text-zinc-500">{work.image.caption}</figcaption>
            </figure>
          )}

          <SubHeading className="mt-6">What I did</SubHeading>
          <ul className="space-y-3">
            {work.contributions.map((c) => (
              <li key={c} className="flex gap-3 leading-relaxed text-zinc-300">
                <FaCheckCircle className="mt-1 shrink-0 text-cyan-400" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
            {work.techStack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Card>
      )}
    </li>
  );
}

function Experience() {
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <Page
      eyebrow="Experience"
      title="Where I’ve worked"
      subtitle="Building AI voice agents, LLM automations and backend services used in day-to-day operations."
    >
      <ol className="relative space-y-12 before:absolute before:bottom-0 before:left-4 before:top-2 before:w-px before:bg-gradient-to-b before:from-amber-400/50 before:to-transparent sm:before:left-5">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.company + exp.role} exp={exp} onPreview={setPreview} />
        ))}
      </ol>
      <Lightbox image={preview} onClose={closePreview} />
    </Page>
  );
}

export default Experience;

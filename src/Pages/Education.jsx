import { FaUniversity, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { education } from "../Data/profile";
import { Page, Card, Tag } from "../Components/ui";

export default function Education() {
  return (
    <Page eyebrow="Education" title="Academic background">
      <div className="space-y-6">
        {education.map((edu) => (
          <Card key={edu.institute} className="flex flex-col gap-5 sm:flex-row">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-400/10 text-2xl text-amber-400">
              <FaUniversity />
            </span>
            <div className="flex-1">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h2 className="text-xl font-bold text-white">{edu.institute}</h2>
                  <p className="mt-1 text-zinc-200">{edu.degree}</p>
                  <p className="text-sm text-cyan-400">{edu.specialization}</p>
                </div>
                <span className="w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                  {edu.grade}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt /> {edu.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaMapMarkerAlt /> {edu.location}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
}

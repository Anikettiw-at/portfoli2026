import { Page, Card } from "../Components/ui";
import { skillGroups } from "../Data/skills";

export default function Skills() {
  return (
    <Page
      eyebrow="Skills"
      title="Tech I work with"
      subtitle="From AI voice agents and LLM APIs to backend services, databases and the DSA fundamentals underneath."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map(({ category, items }) => (
          <Card
            key={category}
            className={category === "AI & Automation" || category === "Frameworks & Backend" ? "md:col-span-2" : ""}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">{category}</h2>
              <span className="text-xs text-zinc-500">{items.length} skills</span>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-zinc-200 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <Icon className={`text-lg ${color}`} aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Page>
  );
}

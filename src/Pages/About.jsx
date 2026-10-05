import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa";
import { interest } from "../Data/interest";
import { Page, Card, SubHeading } from "../Components/ui";

const facts = [
  { icon: FaBriefcase, label: "Currently", value: "AI Developer Intern, EcoSave Home Solutions (USA, Remote)" },
  { icon: FaGraduationCap, label: "Education", value: "B.Tech CSE (AI), IET Lucknow · 8.5 CGPA" },
  { icon: FaTrophy, label: "Competitive", value: "Codeforces Specialist · LeetCode 1790 · CodeChef 3★" },
  { icon: FaMapMarkerAlt, label: "Based in", value: "Lucknow, Uttar Pradesh, India" },
];

const ext = "font-semibold text-amber-400 underline-offset-4 hover:underline";

function About() {
  return (
    <Page eyebrow="About" title="A little about me">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 leading-relaxed text-zinc-300">
          <p>
            I’m <span className="font-semibold text-white">Aniket Tiwari</span>, a final-year
            B.Tech student in Computer Science (Artificial Intelligence specialization) at the{" "}
            <span className="font-semibold text-white">
              Institute of Engineering and Technology, Lucknow
            </span>{" "}
            (2023–2027), and an AI Developer Intern at EcoSave Home Solutions.
          </p>
          <p>
            At EcoSave I build production AI systems: custom LLM integrations through OpenRouter,
            webhook-driven automation pipelines, REST APIs and microservices, and a{" "}
            <Link to="/Experience" className={ext}>
              unified AI communication platform
            </Link>{" "}
            — WebRTC and Telnyx telephony with Vapi + ElevenLabs voice agents that answer calls,
            book appointments and hand off to humans.
          </p>
          <p>
            On the full-stack side I work with Next.js, React, Node.js, Express, TypeScript,
            PostgreSQL/Supabase, MongoDB and Redis, and I like adding AI where it genuinely helps —
            like Gemini-powered captions in Connectify and debugging hints in AlgoVerse.
          </p>
          <p>
            Competitive programming sharpened my problem solving: I’m a{" "}
            <a className={ext} href="https://codeforces.com/profile/At_tiwari078" target="_blank" rel="noopener noreferrer">
              Codeforces
            </a>{" "}
            Specialist (max 1400), reached 1790 on{" "}
            <a className={ext} href="https://leetcode.com/u/At5602238/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
            , and hold 3★ on{" "}
            <a className={ext} href="https://www.codechef.com/users/a_tiwari087" target="_blank" rel="noopener noreferrer">
              CodeChef
            </a>{" "}
            with a global rank of 62 in Starters 157 among 190,000+ participants.
          </p>
          <p>
            I’m looking for software development roles where I can ship reliable, user-focused
            products and keep learning from strong teams.
          </p>
        </div>

        <Card className="h-fit">
          <SubHeading>Quick facts</SubHeading>
          <ul className="space-y-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-400/10 text-amber-400">
                  <Icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
                  <p className="text-sm text-zinc-200">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <SubHeading className="mt-14">Interests</SubHeading>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {interest.map(({ name, icon: Icon }) => (
          <Card
            key={name}
            className="flex flex-col items-center gap-3 p-5 text-center transition hover:-translate-y-0.5 hover:border-amber-400/30"
          >
            <Icon className="text-3xl text-amber-400" />
            <span className="text-sm font-medium text-zinc-200">{name}</span>
          </Card>
        ))}
      </div>
    </Page>
  );
}

export default About;

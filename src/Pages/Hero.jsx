import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import TypewriterText from "../Components/Typewriter";
import { socials, RESUME_URL } from "../Data/social";
import { heroStats } from "../Data/profile";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          AI Developer Intern @ EcoSave · Open to SDE roles
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Aniket Tiwari
          </span>{" "}
          <span className="inline-block origin-[70%_70%] animate-wave" role="img" aria-label="waving hand">
            👋
          </span>
        </h1>

        <div className="mt-4">
          <TypewriterText />
        </div>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          I build production LLM integrations, AI voice agents and real-time VoIP systems with
          Next.js, TypeScript, Supabase, Telnyx and Vapi — backed by strong DSA from competitive
          programming.
        </p>

        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-500">
          <FaMapMarkerAlt /> Lucknow, India · B.Tech CSE (AI), IET Lucknow
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/Projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-zinc-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
          >
            View Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={RESUME_URL}
            download="Aniket_Tiwari_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="mt-6 flex gap-2">
          {socials.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={name}
              className="rounded-xl border border-white/10 p-3 text-xl text-zinc-400 transition hover:border-amber-400/40 hover:text-amber-400"
            >
              <Icon />
            </a>
          ))}
        </div>

        <dl className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-5 backdrop-blur"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-bold text-white sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-xs text-zinc-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;

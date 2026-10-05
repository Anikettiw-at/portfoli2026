import { Link } from "react-router-dom";
import { socials } from "../Data/social";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="font-medium text-zinc-300 hover:text-amber-400">
            Aniket Tiwari
          </Link>
          . Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex gap-1">
          {socials.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={name}
              className="rounded-lg p-2 text-lg transition hover:bg-white/5 hover:text-amber-400"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Experience", path: "/Experience" },
  { name: "Projects", path: "/Projects" },
  { name: "Skills", path: "/Skills" },
  { name: "CP", path: "/Competitive-Programming" },
  { name: "Education", path: "/Education" },
  { name: "Resume", path: "/Resume" },
  { name: "Contact", path: "/Contact" },
];

const linkClass = (isActive, mobile) =>
  `${mobile ? "block px-3 py-2.5" : "px-3 py-2 text-sm"} rounded-lg font-medium transition-colors ${
    isActive ? "bg-white/10 text-amber-400" : "text-zinc-400 hover:bg-white/5 hover:text-white"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-zinc-950/80 backdrop-blur-lg"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={close} className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-400 text-sm font-extrabold text-zinc-950">
            AT
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Aniket<span className="text-amber-400">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) => linkClass(isActive, false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-lg p-2 text-2xl text-zinc-300 transition hover:bg-white/10 lg:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto grid max-w-6xl animate-fade-up gap-1 border-t border-white/10 px-4 py-3 sm:px-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={close}
                className={({ isActive }) => linkClass(isActive, true)}
              >
                {link.name === "CP" ? "Competitive Programming" : link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

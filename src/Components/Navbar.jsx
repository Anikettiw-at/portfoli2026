import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Education", path: "/Education" },
    { name: "Projects", path: "/Projects" },
    { name: "Competitive Programming", path: "/Competitive-Programming" },
    { name: "Skills", path: "/Skills" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <div className="flex text-white justify-between items-center w-full h-[70px] px-3 shadow shadow-zinc-700">
      <div className="text-3xl font-bold text-yellow-400">
        Aniket&apos;s Portfolio
      </div>

      <div className="flex gap-7 mr-7">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-white"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "The Competitive Edge", href: "/hack" },
  ];

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.substring(1));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          const activeLink = navLinks.find(
            (l) => l.href === `#${sectionIds[i]}`
          );
          if (activeLink) setActive(activeLink.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  /* ================= ROUTE CHANGE ================= */
  useEffect(() => {
    if (location.pathname === "/hack") {
      setActive("The Competitive Edge");
    }
  }, [location.pathname]);

  const handleLinkClick = (name, href, e) => {
    e.preventDefault();
    setActive(name);
    setMenuOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.slice(1);

      if (location.pathname !== "/") {
        navigate("/", { replace: false });

        setTimeout(() => {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-black shadow-lg px-12 py-5">
        <div className="flex justify-center max-w-6xl mx-auto">
          <div className="flex space-x-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`relative text-lg font-semibold transition duration-300
                  hover:text-orange-400
                  ${
                    active === link.name
                      ? "text-orange-500 scale-105 drop-shadow-[0_0_6px_rgba(255,140,0,0.7)]"
                      : "text-gray-300"
                  }`}
              >
                {link.name}
                {active === link.name && (
                  <span className="ml-2 text-orange-500 font-mono select-none">
                    {"</>"}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-black shadow-md">
        <div className="flex justify-between items-center px-6 py-2">
          <h1 className="text-orange-500 font-bold text-lg">Advait</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col bg-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`py-3 px-6 font-medium transition
                  ${
                    active === link.name
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-400"
                  }`}
              >
                {link.name}
                {active === link.name && (
                  <span className="ml-2 font-mono text-orange-500">
                    {"</>"}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

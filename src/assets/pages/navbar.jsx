import React, { useState, useEffect } from "react";
import { Home, Code, Briefcase, User, Mail, Menu, X } from "lucide-react";
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

  useEffect(() => {
    const hash = location.hash ? location.hash.substring(1) : null;
    const pathname = location.pathname;

    if (pathname === "/hack") {
      setActive("The Competitive Edge");
    } else if (hash) {
      const found = navLinks.find((link) =>
        link.href.toLowerCase().includes(`#${hash.toLowerCase()}`)
      );
      setActive(found ? found.name : "Home");
    } else {
      setActive("Home");
    }
  }, [location]);

  const handleLinkClick = async (name, href, e) => {
    e.preventDefault();
    setActive(name);
    setMenuOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.slice(1);

      if (location.pathname !== "/") {
        navigate("/", { replace: false });

        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-black shadow-lg px-12 py-5">
        <div className="flex justify-center items-center max-w-6xl mx-auto">
          <div className="flex space-x-20 relative">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`relative flex items-center text-lg font-semibold text-gray-300 cursor-pointer
                  transition duration-300 ease-in-out hover:text-orange-400
                  ${
                    active === link.name
                      ? "text-orange-500 scale-105 drop-shadow-[0_0_6px_rgba(255,140,0,0.7)]"
                      : ""
                  }
                `}
              >
                {link.name}
                {active === link.name && (
                  <span className="ml-2 text-orange-500 font-mono text-base select-none drop-shadow-[0_0_4px_rgba(255,140,0,0.8)]">
                    {"</>"}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar with Dropdown */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-black shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-orange-500 font-bold text-lg">Advait</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="flex flex-col bg-black border-t border-gray-900">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`w-full py-3 px-6 text-left text-gray-300 font-medium border-b border-gray-900
                  hover:bg-gray-900 hover:text-orange-400 transition
                  ${active === link.name ? "text-orange-500 bg-gray-900" : ""}
                `}
              >
                {link.name}
                {active === link.name && (
                  <span className="ml-1 text-orange-500 font-mono text-sm">
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

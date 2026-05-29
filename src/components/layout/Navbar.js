import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import logo from "../../assets/hpainhas-logo-medium.png";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Frosted background after a small scroll threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view and reflect it as the active link.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 hidden transition-all duration-300 lg:block ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink-900/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Henrique Painhas — home"
        >
          <img src={logo} alt="" className="h-7 w-auto" />
        </a>

        <ul className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 backdrop-blur">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative inline-flex h-8 items-center rounded-full px-3 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "bg-white/[0.08] text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/henrique-painhas-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex h-9 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 text-[13px] font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.06]"
        >
          <Download size={14} strokeWidth={2.25} />
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

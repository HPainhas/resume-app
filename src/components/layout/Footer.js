import React from "react";
import { ChevronUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import resumeData from "../../assets/resume.json";

const Footer = () => {
  const linkedin = resumeData.contact?.find((c) => c.type === "linkedin");
  const github = resumeData.contact?.find((c) => c.type === "github");

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-900">
      {/* Scroll-up FAB pinned to the top edge */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-ink-700"
        >
          <ChevronUp size={16} strokeWidth={2.25} />
        </a>
      </div>

      <div className="container-page flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <p className="text-[13px] text-neutral-500">
          <span className="text-neutral-400">© 2026 Henrique Painhas.</span> All
          rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <FaLinkedin size={16} />
            </a>
          )}
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <SiGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

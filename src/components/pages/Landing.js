import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import resumeData from "../../assets/resume.json";
import AuroraBackground from "../ui/AuroraBackground";
import RoleRotator from "../ui/RoleRotator";
import About from "../sections/About";
import Experience from "../sections/Experience";
import FeaturedProject from "../sections/FeaturedProject";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

const ROLES = ["Software Engineer", "Android Developer", "AI Enthusiast"];

const location =
  resumeData.contact?.find((c) => c.type === "location")?.value ||
  "Scottsdale, AZ — USA";

const EASE = [0.22, 1, 0.36, 1];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <AuroraBackground />

      <div className="container-page relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[12px] font-medium text-neutral-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Currently Software Engineer at Toast
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            className="text-display-xl font-bold text-white text-balance"
          >
            Henrique
            <br />
            <span className="text-accent-soft">
              <RoleRotator items={ROLES} stack />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
          >
            Production software by day. AI-built apps by night.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
            className="mt-6 flex items-center gap-2 text-base text-neutral-500"
          >
            <MapPin size={16} strokeWidth={2} />
            Based in {location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#experience"
              className="group inline-flex h-11 min-w-[200px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink-900 transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Experience
              <ArrowDown
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/henrique-painhas-resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex h-11 min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.05]"
            >
              <Download size={16} strokeWidth={2.25} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProject />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

export default Landing;

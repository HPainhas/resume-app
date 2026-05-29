import React from "react";
import { motion } from "framer-motion";
import { Apple, ExternalLink, Sparkles, Users } from "lucide-react";
import resumeData from "../../assets/resume.json";
import topcheeseLogo from "../../assets/topcheese-app-icon.png";
import Section from "../ui/Section";
import Pill from "../ui/Pill";

const EASE = [0.22, 1, 0.36, 1];

const FeaturedProject = () => {
  const project = resumeData.featuredProject;
  if (!project) return null;

  const stats = [
    { label: "120+ users", icon: Users },
    { label: "Live on App Store", icon: Apple },
    { label: "Built with Cursor + Claude", icon: Sparkles },
  ];

  return (
    <Section
      id="project"
      eyebrow="Featured Project"
      title={project.name}
      description="A side project that taught me how fast you can ship when AI is your pair-programmer."
    >
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative rounded-[24px] p-[1px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(59,130,246,0.45) 0%, rgba(255,255,255,0.06) 35%, rgba(168,85,247,0.35) 100%)",
        }}
      >
        <div className="relative overflow-hidden rounded-[23px] bg-ink-800/80 p-6 backdrop-blur sm:p-10">
          {/* Soft accent glow in the corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(59,130,246,0) 70%)",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            {/* Left: icon + meta */}
            <div className="flex items-start gap-5 lg:flex-col lg:items-start lg:gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white shadow-glow sm:h-24 sm:w-24">
                <img
                  src={topcheeseLogo}
                  alt={`${project.name} icon`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {project.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  <span>{project.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.platform}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.startDate} — Present</span>
                </div>
              </div>
            </div>

            {/* Right: description + stats + cta */}
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-neutral-300 sm:text-[17px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                {stats.map((stat) => (
                  <Pill key={stat.label} icon={stat.icon}>
                    {stat.label}
                  </Pill>
                ))}
              </div>

              {project.appStoreUrl ? (
                <div>
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink-900 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    View on the App Store
                    <ExternalLink
                      size={16}
                      strokeWidth={2.25}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </motion.article>
    </Section>
  );
};

export default FeaturedProject;

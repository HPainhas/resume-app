import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiGit,
  SiKotlin,
  SiJenkins,
  SiJira,
  SiGithub,
  SiTypescript,
  SiNodedotjs,
  SiRedis,
  SiClaude,
  SiRailway,
} from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import resumeData from "../../assets/resume.json";
import Section from "../ui/Section";
import Tooltip from "../ui/Tooltip";

const EASE = [0.22, 1, 0.36, 1];

const ICON_MAP = {
  Kotlin: SiKotlin,
  Jenkins: SiJenkins,
  GitHub: SiGithub,
  Jira: SiJira,
  Railway: SiRailway,
  Android: DiAndroid,
  React: SiReact,
  Git: SiGit,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Redis: SiRedis,
  Claude: SiClaude,
};

const Skills = () => {
  const skills = resumeData.technicalSkills || [];

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The stack I reach for."
      description="Languages, frameworks, and tools I use day-to-day — at Toast and on the side."
    >
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
        {skills.map((skill, i) => {
          const Icon = ICON_MAP[skill.name] || BiCodeAlt;
          const isDarkBrand = skill.color === "#000000";

          return (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.35,
                ease: EASE,
                delay: Math.min(i * 0.06, 0.6),
              }}
            >
              <Tooltip label={skill.name} className="w-full">
                <div className="group flex aspect-square w-full cursor-default flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]">
                  <Icon
                    size={32}
                    color={isDarkBrand ? "#ffffff" : skill.color}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors group-hover:text-neutral-300">
                    {skill.name}
                  </span>
                </div>
              </Tooltip>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Skills;

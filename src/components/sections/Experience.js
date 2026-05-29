import React from "react";
import { motion } from "framer-motion";
import toastLogo from "../../assets/toast-logo.png";
import eRetailingLogo from "../../assets/eretailing-logo.jpeg";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Pill from "../ui/Pill";

const EASE = [0.22, 1, 0.36, 1];

// Grouping Toast's two roles under one card makes the promotion read at a glance.
const EXPERIENCE = [
  {
    company: "Toast",
    logo: toastLogo,
    roles: [
      {
        title: "Software Engineer II",
        date: "March 2024 — Present",
        description:
          "Android Engineer (Kotlin). Member of the Payments Experience team. Responsible for implementing new features, reducing complexity and ambiguity in the code through PRs and documentation, improving user experience, collaborating with other teams, writing Unit/Espresso tests, and fixing bugs within the Toast point of sale (POS) application.",
        current: true,
      },
      {
        title: "Software Engineer I",
        date: "December 2021 — March 2024",
        description:
          "Mainly working as an Android Engineer (Kotlin). Member of the Payments Experience team. Responsible for implementing new features, updating existing payment functionalities, and fixing bugs within the Toast point of sale (POS) application.",
      },
    ],
  },
  {
    company: "eRetailing",
    logo: eRetailingLogo,
    roles: [
      {
        title: "Software Engineer",
        date: "May 2019 — December 2021",
        description:
          "My tasks on the e-commerce team include: continue to improve the in-house Android application I developed which monitors all of our order processing workflow, handles the inventory system accuracy, and allows the production team to receive inbound goods efficiently; writing software to enhance our inventory management system and handle errors; help with the design of the new warehouse labeling system; among other tasks.",
      },
    ],
  },
];

const TimelineEntry = ({ entry, index }) => {
  const isMulti = entry.roles.length > 1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: EASE, delay: 0.05 + index * 0.05 }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Rail marker: halo + dot, sharing the same anchor */}
      <span className="absolute left-4 top-7 z-10 -translate-x-1/2 sm:left-6">
        <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20" />
        <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-ink-900 bg-accent" />
      </span>

      <Card interactive className="p-6 sm:p-8">
        <header className="mb-5 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl">
            <img
              src={entry.logo}
              alt={`${entry.company} logo`}
              className="h-12 w-12 object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              {entry.company}
            </h3>
            {isMulti && (
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                {entry.roles.length} roles · Promoted
              </p>
            )}
          </div>
        </header>

        <div className={isMulti ? "space-y-6" : ""}>
          {entry.roles.map((role, i) => (
            <div
              key={role.title + role.date}
              className={
                isMulti && i > 0 ? "border-t border-white/[0.06] pt-6" : ""
              }
            >
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                <h4 className="text-base font-semibold text-white sm:text-lg">
                  {role.title}
                </h4>
                <Pill variant={role.current ? "accent" : "subtle"}>
                  {role.date}
                </Pill>
              </div>
              <p className="text-[15px] leading-relaxed text-neutral-400">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </motion.li>
  );
};

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped."
      description="Shipping production software since 2019 — mostly Android, mostly payments."
    >
      <ol className="relative">
        {/* Vertical rail */}
        <span className="absolute left-4 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-white/15 via-white/[0.06] to-transparent sm:left-6" />

        <div className="space-y-8">
          {EXPERIENCE.map((entry, index) => (
            <TimelineEntry key={entry.company} entry={entry} index={index} />
          ))}
        </div>
      </ol>
    </Section>
  );
};

export default Experience;

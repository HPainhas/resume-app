import React from "react";
import { motion } from "framer-motion";
import ohioStateUniversityLogo from "../../assets/ohio-state-university-logo.png";
import trineUniversityLogo from "../../assets/trine-university-logo.jpeg";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Pill from "../ui/Pill";

const EASE = [0.22, 1, 0.36, 1];

const EDUCATION = [
  {
    school: "Trine University",
    logo: trineUniversityLogo,
    degree: "M.S. in Information Studies",
    date: "May 2024",
    meta: [{ label: "GPA", value: "4.0" }],
  },
  {
    school: "The Ohio State University",
    logo: ohioStateUniversityLogo,
    degree: "B.S. in Computer and Information Science",
    date: "May 2020",
    meta: [
      { label: "GPA", value: "3.28" },
      { label: "Focus", value: "Software Systems" },
      { label: "Dean's List", value: "5 semesters" },
    ],
  },
];

const Education = () => {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Where I learned the fundamentals."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
          >
            <Card interactive className="h-full">
              <header className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white">
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {edu.school}
                </h3>
              </header>

              <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="text-[15px] font-medium text-neutral-200">
                  {edu.degree}
                </p>
                <Pill variant="subtle">{edu.date}</Pill>
              </div>

              <ul className="flex flex-wrap gap-2">
                {edu.meta.map((m) => (
                  <Pill key={m.label}>
                    <span className="text-neutral-500">{m.label}</span>
                    <span className="text-white">{m.value}</span>
                  </Pill>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;

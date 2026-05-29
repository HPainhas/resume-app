import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import resumeData from "../../assets/resume.json";
import HenriqueProfilePic from "../../assets/henrique.jpg";
import Section from "../ui/Section";
import Card from "../ui/Card";

const EASE = [0.22, 1, 0.36, 1];

const About = () => {
  return (
    <Section id="about" eyebrow="About" title={resumeData.aboutHeadline}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Card className="overflow-hidden p-0">
          <div className="grid gap-0 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[420px]">
              <img
                src={HenriqueProfilePic}
                alt="Henrique Painhas"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink-900/40 md:to-ink-900/80" />
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                {resumeData.aboutBody}
              </p>

              <div>
                <a
                  href="/henrique-painhas-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <ArrowDownToLine
                    size={16}
                    strokeWidth={2.25}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

export default About;

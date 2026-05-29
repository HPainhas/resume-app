import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MapPin, ExternalLink } from "lucide-react";
import resumeData from "../../assets/resume.json";
import Section from "../ui/Section";

const EASE = [0.22, 1, 0.36, 1];

const ICONS = {
  linkedin: FaLinkedin,
  github: SiGithub,
  location: MapPin,
};

const TYPE_LABELS = {
  linkedin: "LinkedIn",
  github: "GitHub",
  location: "Location",
};

const Contact = () => {
  const items = resumeData.contact || [];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect."
      description="Open to chat about engineering, payments, hockey, or anything you're building."
      align="center"
    >
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {items.map((info, i) => {
          const Icon = ICONS[info.type] || ExternalLink;
          const isLink = Boolean(info.url);
          const Tag = isLink ? "a" : "div";

          const linkProps = isLink
            ? { href: info.url, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <motion.div
              key={info.type}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.07 }}
            >
              <Tag
                {...linkProps}
                className={`group flex h-full flex-col items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 ${
                  isLink
                    ? "hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    {TYPE_LABELS[info.type] || info.type}
                  </p>
                  <p className="mt-1 text-base font-medium text-white">
                    {info.value}
                  </p>
                </div>
                {isLink && (
                  <span className="mt-auto inline-flex items-center gap-1 text-[12px] font-medium text-neutral-400 transition-colors group-hover:text-accent-soft">
                    Open
                    <ExternalLink
                      size={12}
                      strokeWidth={2.25}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                )}
              </Tag>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Contact;

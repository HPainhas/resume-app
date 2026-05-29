import React from "react";
import { motion } from "framer-motion";

const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  innerClassName = "",
  align = "left",
}) => {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 sm:py-28 lg:py-32 ${className}`}
    >
      <div className={`container-page ${innerClassName}`}>
        {(eyebrow || title || description) && (
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}
          >
            {eyebrow && (
              <div
                className={`mb-4 flex ${
                  align === "center" ? "justify-center" : "justify-start"
                }`}
              >
                <span className="eyebrow">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="text-display-md font-semibold text-white text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-4 max-w-2xl text-base text-neutral-400 ${
                  align === "center" ? "mx-auto" : ""
                }`}
              >
                {description}
              </p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

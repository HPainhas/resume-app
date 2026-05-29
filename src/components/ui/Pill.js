import React from "react";

const variants = {
  default: "border-white/10 bg-white/[0.03] text-neutral-300",
  subtle: "border-white/5 bg-white/[0.015] text-neutral-400",
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
  success: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
};

const Pill = ({
  children,
  variant = "default",
  className = "",
  icon: Icon,
  ...rest
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium leading-none tracking-wide ${variants[variant]} ${className}`}
      {...rest}
    >
      {Icon ? <Icon size={12} strokeWidth={2.25} aria-hidden="true" /> : null}
      {children}
    </span>
  );
};

export default Pill;

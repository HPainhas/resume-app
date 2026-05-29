import React from "react";

/**
 * Pure-CSS decorative backdrop for the hero.
 * - Soft radial "aurora" gradient blobs.
 * - Faint dot grid overlay.
 * - A bottom fade into the page surface.
 */
const AuroraBackground = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Aurora blobs */}
      <div
        className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(59,130,246,0) 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-32 h-[520px] w-[640px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.25), rgba(168,85,247,0) 70%)",
        }}
      />
      <div
        className="absolute -left-32 top-1/3 h-[420px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(20,184,166,0.22), rgba(20,184,166,0) 70%)",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-900" />
    </div>
  );
};

export default AuroraBackground;

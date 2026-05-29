import React from "react";

const Card = React.forwardRef(
  (
    { as: Tag = "div", className = "", interactive = false, children, ...rest },
    ref,
  ) => {
    const base =
      "glass-card relative p-6 sm:p-8 transition-colors duration-300";
    const interactiveCls = interactive
      ? "hover:border-white/15 hover:bg-white/[0.035]"
      : "";

    return (
      <Tag
        ref={ref}
        className={`${base} ${interactiveCls} ${className}`}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

Card.displayName = "Card";

export default Card;

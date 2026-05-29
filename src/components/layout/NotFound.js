import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink-900 px-6 text-center text-neutral-300">
      <p className="eyebrow mb-6">404</p>
      <h1 className="text-display-lg font-bold text-white">Page not found.</h1>
      <p className="mt-4 max-w-md text-base text-neutral-400">
        The page you were looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink-900 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <ArrowLeft size={16} strokeWidth={2.25} />
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;

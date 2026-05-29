import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import MobileNavbar from "./components/layout/MobileNavbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/pages/Landing";
import NotFound from "./components/layout/NotFound";

const App = () => {
  return (
    // `reducedMotion="user"` makes Framer Motion respect the OS-level
    // prefers-reduced-motion setting for every animation in the tree.
    <MotionConfig reducedMotion="user">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-ink-900 text-neutral-300">
                <Navbar />
                <MobileNavbar />
                <main>
                  <Landing />
                </main>
                <Footer />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </MotionConfig>
  );
};

export default App;

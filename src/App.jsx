import { HashRouter } from "react-router-dom";
import { About, Contact, Work, Hero, Navbar } from "./components";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Cursor from "./Cursor";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const startTimeRef = useRef(Date.now());

  // Fake loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Ensure minimum 2 seconds
  useEffect(() => {
    if (progress === 100) {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(2000 - elapsed, 0);

      const timer = setTimeout(() => {
        setShowLoader(false);
      }, remaining);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && <Loader progress={progress} />}
      </AnimatePresence>

      {!showLoader && (
        <HashRouter>
          <Cursor />
          <Navbar />

          <section id="home">
            <Hero />
          </section>

          <section className="scroll-mt-10" id="work">
            <Work />
          </section>

          <section id="about" className="scroll-mt-5">
            <About />
          </section>

          <section id="contact" className="scroll-mt-0">
            <Contact />
          </section>
        </HashRouter>
      )}
    </>
  );
};

export default App;
import { HashRouter } from "react-router-dom";
import { About, Contact, Work, Hero, Navbar } from "./components";
import Cursor from "./Cursor";

const App = () => {
  return (
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
  );
};

export default App;

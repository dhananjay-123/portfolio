import { HashRouter } from "react-router-dom";
import { About, Contact, Work, Hero, Navbar } from "./components";

const App = () => {
  return (
    <HashRouter>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section className="scroll-mt-25" id="work">
        <Work />
      </section>

      <section id="about" className="scroll-mt-25">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </HashRouter>
  );
};

export default App;

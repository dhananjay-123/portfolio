
import { HashRouter,Routes,Route } from "react-router-dom";
import { About, Contact, Work, Hero, Navbar } from "./components";


const App = () => {
  return (
    <HashRouter>
      
      <Navbar />

      
      <Hero />
      <Work />
      <About />
      
    </HashRouter>
  );
};
export default App

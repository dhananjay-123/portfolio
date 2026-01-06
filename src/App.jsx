
import { HashRouter,Routes,Route } from "react-router-dom";
import { About, Contact, Work, Hero, Navbar } from "./components";


const App = () => {
  return (
    <HashRouter>
      
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};
export default App

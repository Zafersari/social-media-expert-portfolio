import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;

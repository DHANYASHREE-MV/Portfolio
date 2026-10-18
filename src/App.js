import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FocusLab from "./components/FocusLab";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Leadership from "./components/Leadership";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <FocusLab />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
       <Leadership /> 
    
      <Footer />
    </div>
  );
}

export default App;

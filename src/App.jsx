import { Toaster } from "react-hot-toast";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="site-shell">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4500,
          style: { background: "#11152a", color: "#fff", border: "1px solid rgba(255,255,255,.12)" },
        }}
      />
      <Navbar />
      <Hero />
      <main className="relative overflow-hidden">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <About />
        <Experiences />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

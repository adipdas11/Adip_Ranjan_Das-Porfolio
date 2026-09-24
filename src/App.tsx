import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Research />
        <Publications />
        <Projects />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

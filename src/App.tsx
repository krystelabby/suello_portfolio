import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { FloatingFlowers } from "./components/FloatingFlowers";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-bg-page text-text-body">
      <FloatingFlowers />
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Certificates />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

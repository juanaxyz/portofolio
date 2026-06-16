import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Philosophy } from "./components/sections/Philosophy";
import { Projects } from "./components/sections/Projects";
import { Stats } from "./components/sections/Stats";
import { JarvisChat } from "./components/sections/JarvisChat";
import { Contact } from "./components/sections/Contact";
import { ScrollReveal } from "./components/ui/ScrollReveal";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollReveal><Philosophy /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Stats /></ScrollReveal>
      <ScrollReveal><JarvisChat /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </>
  );
}

export default App;

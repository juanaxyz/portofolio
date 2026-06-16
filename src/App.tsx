import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Philosophy } from "./components/sections/Philosophy";
import { Projects } from "./components/sections/Projects";
import { Stats } from "./components/sections/Stats";
import { JarvisChat } from "./components/sections/JarvisChat";
import { Contact } from "./components/sections/Contact";
import { ScrollReveal } from "./components/ui/ScrollReveal";
import { CustomCursor } from "./components/ui/CustomCursor";
import { SectionDivider } from "./components/ui/SectionDivider";
import { Background3D } from "./components/ui/Background3D";

function App() {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setHasFinePointer(true);
      document.body.style.cursor = "none";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <Background3D />
      {hasFinePointer && <CustomCursor />}
      <Navbar />
      <Hero />
      <SectionDivider />
      <ScrollReveal><Philosophy /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal><Projects /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal><Stats /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal><JarvisChat /></ScrollReveal>
      <SectionDivider />
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </>
  );
}

export default App;

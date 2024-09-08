import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import AboutMe from "./components/sections/AboutMe";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Projects, { Project } from "./components/sections/Projects";
import Hero from "./components/sections/Hero";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const nextSectionRef = useRef<HTMLElement | null>(null);

  return (
    <div className="container mx-auto md:px-4 md:py-3">
      <Navbar />
      <Hero nextSectionRef={nextSectionRef} />
      <AboutMe nextSectionRef={nextSectionRef} />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}

export default App;

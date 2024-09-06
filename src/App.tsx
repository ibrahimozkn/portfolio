import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import AboutMe from "./components/sections/AboutMe";
import Card from "./components/Card";

function App() {
  const nextSectionRef = useRef<HTMLElement | null>(null);

  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-3">
      <Navbar />
      <section id="hero" className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col p-4 sm:p-8 relative items-center justify-center">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-lg sm:text-xl font-bold">Hello! I'm Ibrahim</h1>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              <span className="text-blue-400">
                Extraordinaire Flutter Developer
              </span>{" "}
              Turning Code into Pixel-Perfect <span>Magic!🪄</span>
            </h2>
          </div>
          <div className="absolute z-0 bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="circlePosition rounded-[100%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-blue-400 to-blue-900 blur-[100px] sm:blur-[150px]"></div>
          </div>
          <button className="btn btn-neutral mt-8 w-full sm:w-80 mx-auto z-10">
            Contact Me ✉️
          </button>
        </div>
        <button
          className="btn btn-ghost mb-4 self-center text-base"
          onClick={handleScrollDown}
        >
          Scroll Down 👇
        </button>
      </section>
      <AboutMe nextSectionRef={nextSectionRef} />
      <section className="min-h-screen">
        <div className="flex flex-col p-4 sm:p-8 items-center">
          <h2 className="font-bold text-3xl sm:text-5xl text-center">
            My Projects 💻
          </h2>
          <div className="divider mt-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

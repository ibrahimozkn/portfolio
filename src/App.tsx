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
    <div className="container mx-auto py-3">
      <section id="hero" className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col p-8 relative items-center justify-center">
          <div className="relative z-10">
            <h1 className="text-lg font-bold">Hello! I'm Ibrahim</h1>
            <h2 className="text-8xl font-bold">
              <span className="text-blue-400">
                Extraordinaire Flutter Developer
              </span>{" "}
              Turning Code into Pixel-Perfect <span>Magic!🪄</span>
            </h2>
          </div>
          <div className="absolute z-0 bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="circlePosition rounded-[100%] w-[300px] h-[300px] bg-gradient-to-br from-blue-400 to-blue-900 blur-[150px]"></div>
          </div>
          <button className="btn btn-neutral mt-8 w-80 mx-auto z-10">
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
      <section className="">
        <div className="flex flex-col p-8 items-center">
          <h2 className="font-bold text-5xl">My Projects 💻</h2>
          <div className="divider mt-5"></div>
          <div className="grid grid-cols-4 gap-5">
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

import React from "react";

interface HeroProps {
  nextSectionRef: React.RefObject<HTMLElement>;
}

function Hero({ nextSectionRef }: HeroProps) {
  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    window.location.href = "mailto:ibrahim.ozkn@outlook.com";
  };

  return (
    <section id="hero" className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col p-4 sm:p-8 relative items-center justify-center">
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-lg sm:text-xl font-bold">Hello! I'm Ibrahim</h1>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            Crafting software solutions with precision, creativity, and a touch
            of
            <span className="text-blue-400"> code magic!🪄</span>
          </h2>
        </div>
        <div className="absolute z-0 bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-[100%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-blue-400 to-blue-900 blur-[100px] sm:blur-[150px]"></div>
        </div>
        <button
          className="btn btn-neutral mt-8 w-full sm:w-80 mx-auto z-10"
          onClick={handleContactClick}
        >
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
  );
}

export default Hero;

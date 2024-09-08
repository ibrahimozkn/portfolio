import React from "react";
import Timeline from "../Timeline";

interface AboutMeProps {
  nextSectionRef: React.RefObject<HTMLElement> | null;
}

function AboutMe({ nextSectionRef }: AboutMeProps) {
  return (
    <section
      ref={nextSectionRef}
      className="container flex flex-col min-h-screen p-8 items-center text-center lg:text-left"
    >
      <div className="flex flex-grow flex-col justify-center items-center md:flex-row">
        <div className="flex-none w-full md:w-1/2">
          <h2 className="text-5xl font-bold">About Me 🔎</h2>
          <p className="text-xl mt-4">
            I'm İbrahim Özkan, a passionate software engineer with a strong
            foundation in computer engineering, having graduated with honors
            from METU. Currently, I'm pursuing my MSc in Software Systems
            Engineering at Hasso Plattner Institut, Potsdam, where I also work
            as a HiWi, developing the StudyU app to digitalize N-of-1 trials.
            Over the years, I've honed my skills in mobile and web development,
            working with technologies like Flutter, Laravel, and PHP. Alongside
            three fellow graduates, I co-founded Morphou Software, where we
            secured funding for our first project, Gatsot—a crowdsourced price
            comparison app.
          </p>
        </div>
        <div className="flex-none w-full md:w-1/2 h-full mt-8 md:mt-0 relative">
          <div className="relative z-10">
            <img
              src="https://ibrahimozkan.xyz/img/profile.jpg"
              alt="Profile"
              className="rounded-xl w-full h-auto md:w-1/2 md:h-1/2 object-cover mx-auto"
            />
          </div>
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-[100%] w-[300px] h-[300px] bg-gradient-to-br from-blue-400 to-blue-900 blur-[150px]"></div>
          </div>
        </div>
      </div>
      <Timeline />
    </section>
  );
}

export default AboutMe;

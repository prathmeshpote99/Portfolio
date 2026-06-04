import { motion } from "framer-motion";
import { styles } from "../styles";
import { bwmap, worldmap } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{" "}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Prathmesh
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Full Stack Developer — React, Node.js & React Native.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#0a0a0a] text-white font-beckman 
                text-[14px] uppercase tracking-[2px] rounded-[8px]
                hover:bg-battleGray hover:text-eerieBlack 
                transition duration-200 ease-in-out"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-[#0a0a0a] text-eerieBlack 
                font-beckman text-[14px] uppercase tracking-[2px] rounded-[8px]
                hover:bg-[#0a0a0a] hover:text-white
                transition duration-200 ease-in-out"
              >
                Hire Me
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex gap-5 mt-5 items-center">
              <a
                href="https://github.com/prathmeshpote99"
                target="_blank"
                rel="noreferrer"
                className="text-eerieBlack hover:text-battleGray transition text-[13px] font-poppins underline underline-offset-2"
              >
                GitHub
              </a>
              <span className="text-eerieBlack opacity-40">·</span>
              <a
                href="https://www.linkedin.com/in/prathmesh-pote-4b25b4214/"
                target="_blank"
                rel="noreferrer"
                className="text-eerieBlack hover:text-battleGray transition text-[13px] font-poppins underline underline-offset-2"
              >
                LinkedIn
              </a>
              <span className="text-eerieBlack opacity-40">·</span>
              <span className="text-eerieBlack text-[13px] font-poppins">
                Available for freelance
              </span>
            </div>
          </div>

          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

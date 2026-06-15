import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.03,
          speed: 400,
          glare: true,
          maxGlare: 0.3,
        }}
        className="card-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[3rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[20px] max-w-6xl leading-[35px] text-justify"
      >
        Hey there! I'm Prathmesh Pote — a Full Stack Developer with 3+ years of
        professional experience building web and mobile applications. I
        specialise in the MERN Stack (MongoDB, Express.js, React, Node.js),
        Next.js, React Native, PostgreSQL, AWS, and CircleCI. I've delivered
        projects for clients across India and internationally, including
        platforms in Ghana and healthcare, education, and real estate domains.
        Whether it's a CRM, e-commerce platform, or a mobile app — I take pride
        in shipping clean, scalable, and production-ready code. Let's build
        something great together!
      </motion.p>

      {/* Quick stats */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 flex flex-wrap gap-8"
      >
        {[
          { value: "3+", label: "Years Experience" },
          { value: "10+", label: "Projects Delivered" },
          // { value: "3", label: "Countries Served" },
          // { value: "∞", label: "Cups of Chai" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-timberWolf text-[32px] font-bold font-beckman">
              {stat.value}
            </span>
            <span className="text-taupe text-[13px] font-poppins tracking-wider uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Contact quick links */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-6 flex flex-wrap gap-4 items-center"
      >
        <a
          href="mailto:poteprathmesh@gmail.com"
          className="text-taupe hover:text-timberWolf transition text-[15px] font-poppins flex items-center gap-2"
        >
          <span>✉</span> poteprathmesh@gmail.com
        </a>
        <span className="text-taupe opacity-40">|</span>
        <button
          className="text-taupe hover:text-timberWolf transition text-[15px] font-poppins flex items-center gap-2"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/prathmesh-pote-4b25b4214/",
              "_blank",
            )
          }
        >
          <span>🔗</span> LinkedIn
        </button>
        <span className="text-taupe opacity-40">|</span>
        <button
          className="text-taupe hover:text-timberWolf transition text-[15px] font-poppins flex items-center gap-2"
          onClick={() =>
            window.open("https://github.com/prathmeshpote99", "_blank")
          }
        >
          <span>⌨</span> GitHub
        </button>
      </motion.div>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

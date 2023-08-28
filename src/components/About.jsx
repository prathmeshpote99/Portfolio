import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[20px] max-w-6xl leading-[35px] text-justify"
      >
        Hey there, I'm Prathmesh Pote, a dedicated Full Stack Developer. With a
        passion for crafting seamless web experiences, I specialize in building
        efficient and user-friendly applications using MongoDB, Express.js,
        React, and Node.js. <br />
        My journey is all about transforming innovative ideas into functional
        code. I've always been captivated by the way technology shapes our
        lives, and my journey as a developer began with the desire to create
        meaningful digital experiences. My expertise lies in harnessing the
        power of MongoDB, Express.js, React, and Node.js – the MERN Stack – to
        build applications that seamlessly integrate the best of each
        technology. From intuitive user interfaces to robust backend solutions,
        I bring together the pieces of the puzzle to craft cohesive and
        efficient applications.
        <br />
        <i class="fa-solid fa-message animate-bounce"></i>
        <b> Let's Start a Conversation:</b>
        <button
          className="hover:text-eerieBlack"
          // className="hover:text-eerieBlack animate-pulse"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/prathmesh-pote-4b25b4214/",
              "_blank"
            );
          }}
        >
          {" "}
          &nbsp;<b className="text-decoration: underline">Prathmesh Pote</b>
        </button>
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-8 bg-night text-timberWolf">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Left: name + tagline */}
        <div>
          <h3 className="text-[18px] font-bold font-beckman text-timberWolf">
            Prathmesh Pote
          </h3>
          <p className="text-taupe text-[13px] font-poppins mt-1">
            Full Stack Developer · Available for freelance
          </p>
        </div>

        {/* Center: contact info */}
        <div className="flex flex-col gap-1">
          <a
            href="mailto:poteprathmesh@gmail.com"
            className="text-taupe hover:text-timberWolf transition text-[14px] font-poppins"
          >
            ✉ poteprathmesh@gmail.com
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="text-taupe hover:text-timberWolf transition text-[14px] font-poppins"
          >
            +91 8668867937
          </a>
        </div>

        {/* Right: social links */}
        <div className="flex gap-6">
          <Link
            to="#"
            onClick={() =>
              window.open("https://github.com/prathmeshpote99", "_blank")
            }
            className="text-taupe hover:text-timberWolf transition text-[14px] font-poppins uppercase tracking-widest"
          >
            GitHub
          </Link>
          <Link
            to="#"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/prathmesh-pote-4b25b4214/",
                "_blank",
              )
            }
            className="text-taupe hover:text-timberWolf transition text-[14px] font-poppins uppercase tracking-widest"
          >
            LinkedIn
          </Link>
          <a
            href="#contact"
            className="text-taupe hover:text-timberWolf transition text-[14px] font-poppins uppercase tracking-widest"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-taupe text-[12px] font-poppins">
          © {new Date().getFullYear()} Prathmesh Pote. All rights reserved.
        </p>
        {/* <p className="text-taupe text-[12px] font-poppins">
          Built with React · Deployed on Vercel
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="p-5 bg-white text-black font-semibold text-[15px] max-w-12xl leading-[30px] text-start">
        <h3>Thank you for visiting my personal portfolio website.</h3>
        <p>
          Connect with me over
          <span>
            <Link
              to="#"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/prathmesh-pote-4b25b4214/",
                  "_blank"
                );
              }}
            >
              {" "}
              <u>LinkedIn.</u>
            </Link>
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;

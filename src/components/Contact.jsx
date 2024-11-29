import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa"; // Corrected Twitter icon
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaInstagramSquare className="icons" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/bhavya-bansal98"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaTwitterSquare className="icons" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:example@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

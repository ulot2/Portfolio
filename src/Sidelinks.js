import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

const Sidelinks = () => {
  return (
    <>
      <div className="sidelinks">
        <div className="socials">
          <a href="https://github.com/ulot2">
            <TbBrandGithub />
          </a>
          <a href="https://instagram.com/tnuell/" target="_">
            <AiOutlineInstagram />
          </a>
          <a href="www.twitter.com">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/Tolu_dev" target="_">
            <RiTwitterLine />
          </a>
          <hr />
        </div>
        <div className="email">
          <a href="mailto:et.nuell@gmail.com">et.nuell@gmail.com</a>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Sidelinks;

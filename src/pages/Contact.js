import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h5>What's next?</h5>
        <h2>Get In Touch </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae magnam
          reiciendis nihil cupiditate. Nihil libero aliquid suscipit quam,
          distinctio nisi?
        </p>
        <a href="mailto:et.nuell@gmail.com">
          <button>Email me</button>
        </a>
        <p>You can also get in touch via:</p>
        <div>
          <a href="www.twitter.com">
            <TbBrandGithub />
          </a>
          <a href="www.twitter.com" target="_">
            <AiOutlineInstagram />
          </a>
          <a href="www.twitter.com">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/Tolu_dev" target="_">
            <RiTwitterLine />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

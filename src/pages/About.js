import React from "react";
import Image from "../mee.jpeg";
import Image2 from "../ill.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1>
            <span>00.</span>About Me
          </h1>
          <hr />
        </div>
        <div className="about-content">
          <div>
            <p>
              Hi there! My name is Toluwalope, and I am a front-end web
              developer with a passion for creating visually stunning and highly
              functional websites. My interest in web develpment started back in
              2020. I have always been facinated with how websites were created
              and now here I am!
              <p>
                With extensive experience in <span>HTML</span>, <span>CSS</span>
                , <span>JavaScript</span> and <span>React.js</span>, I
                specialize in turning complex designs into fully functional web
                pages. I am a great communicator and team player, always willing
                to collaborate to ensure that the final product meets everyone's
                expectations.
              </p>
              <p>
                When I'm not coding, you can usually find me watching Arsenal
                play or playing video games. I am committed to staying
                up-to-date with the latest technologies and techniques in
                front-end development, and I am always looking for new ways to
                improve my skills and knowledge.
              </p>
              <span>Let's work together</span> to create a website that will
              make a lasting impression on your audience.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

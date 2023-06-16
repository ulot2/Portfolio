import React from "react";
import Navbar from "./Navbar";
import Sidelinks from "./Sidelinks";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Sidelinks />
      <div className="intro">
        <h6>Hi, my name is</h6>
        <h1>Toluwalope Adegoke.</h1>
        <h1>I build things for the web.</h1>
        <p>
          Hey there and welcome to my portfolio website! I'm a web developer
          with a knack for creating awesome online experiences. From
          eye-catching designs to seamless functionality, I've got you covered.
          Check out my latest projects to see my skills in action and let's
          bring your online vision to life! Shoot me a message and let's get
          started.
        </p>
      </div>
      <About />
    </>
  );
}

export default App;

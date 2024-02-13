import React from "react";
import Navbar from "./Navbar";
import Sidelinks from "./Sidelinks";
import About from "./pages/About";
import { Projects } from "./pages/Projects";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";

function App() {
  return (
    <>
      <Navbar />
      <Sidelinks />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

import React, { useState } from "react";
import resume from "./resume.pdf";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div>
          <h3 className="logo-text">
            dev<span>Tolu</span>
          </h3>
        </div>
        <div className={`links-container ${showLinks && "show-container"}`}>
          <ul className="nav-links">
            <li>
              <span>00.</span>About
            </li>
            <li>
              <span>01.</span>Experience
            </li>
            <li>
              <span>01.</span>Work
            </li>
            <li>
              <span>02.</span>Contact
            </li>
            <a className="resume" href={resume} target="_">
              Resume
            </a>
          </ul>
        </div>
        <div
          className={`${showLinks ? "burger toggle" : "burger"}`}
          onClick={() => setShowLinks(!showLinks)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

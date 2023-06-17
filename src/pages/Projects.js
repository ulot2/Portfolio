import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";

export const Projects = () => {
  return (
    <div className="about projects">
      <div>
        <h1>
          <span>01.</span>Things I've built
        </h1>
        <hr />
      </div>
      <div className="ppp">
        <div>
          <a
            href="https://track-your-ipaddress.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="container"></div>
          </a>
        </div>
        <div className="okay">
          <a href="https://track-your-ipaddress.netlify.app/">
            IP Address Tracker
          </a>
          <p>
            The IP Address Tracker is a web application that allows users to
            <span> track</span> and <span>visualize</span> the location of IP
            addresses.
          </p>
          <p>React js</p>
          <div className="links">
            <a
              href="https://github.com/ulot2/ip_address_tracker_"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub />
            </a>
            <a
              href="https://track-your-ipaddress.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <MdOpenInNew />
            </a>
          </div>
        </div>
      </div>
      <div className="ppp">
        <div>
          <a
            href="https://t-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="container weather"></div>
          </a>
        </div>
        <div className="okay">
          <a href="https://t-weather-app.netlify.app/">Weather App</a>
          <p>
            The weather app is a web application that allows users to see
            <span> realtime</span> weather update for any location
          </p>
          <p>React js</p>
          <div className="links">
            <a
              href="https://github.com/ulot2/weather_app"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub />
            </a>
            <a
              href="https://t-weather-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <MdOpenInNew />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

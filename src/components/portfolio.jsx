import React from "react";
import "../../styles/index.css";
import { FaGithub } from "react-icons/fa";
import note_taker from "../assets/images/note_taker_screenshot.png";
import resume from "../assets/resume/resume.docx";
import resumeIcon from "../assets/images/resume.png";
import weather_app from "../assets/images/weather_app.png";
import work_scheduler from "../assets/images/work_scheduler.png";
import horiseon from "../assets/images/horiseon.png";
import password_gen from "../assets/images/password_gen.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>

      <div className="project">
        <a href="https://frozen-everglades-12046-e64b2284399d.herokuapp.com/notes">
          <h3>Note Taker App</h3>
        </a>
        <a href="https://github.com/jaclynnburch/Express-note-taker.git">
          <FaGithub />
        </a>
        <img src={note_taker} alt="Note Taker App" />
      </div>

      <div className="project">
        <a href="https://jaclynnburch.github.io/jackie-weather-data/">
          <h3>Weather App</h3>
        </a>
        <a href="https://github.com/jaclynnburch/jackie-weather-data.git">
          <FaGithub />
        </a>
        <img src={weather_app} alt="Weather App" />
      </div>

      <div className="project">
        <a href="https://jaclynnburch.github.io/workscheduler/">
          <h3>Work Day Scheduler</h3>
        </a>
        <a href="https://github.com/jaclynnburch/workscheduler.git">
          <FaGithub />
        </a>
        <img src={work_scheduler} alt="Work Day Scheduler" />
      </div>

      <div className="project">
        <a href="https://github.com/jaclynnburch/nebulous_ball-marketing-plan.git">
          <h3>Horiseon Optimized</h3>
        </a>
        <a href="https://github.com/jaclynnburch/nebulous_ball-marketing-plan.git">
          <FaGithub />
        </a>
        <img src={horiseon} alt="Horiseon Optimized" />
      </div>

      <div className="project">
        <a href="https://jaclynnburch.github.io/password-generator/">
          <h3>Password Generator</h3>
        </a>
        <a href="https://github.com/jaclynnburch/password-generator.git">
          <FaGithub />
        </a>
        <img src={password_gen} alt="Password Generator" />
      </div>
    </div>
  );
};

export default Portfolio;
import React from "react";
import "../../styles/index.css";
import resume from "../../assets/resume/resume.docx";
import resumeIcon from "../../assets/images/resume.png";

const Resume = () => {
  return (
    <div id="resume">
      <h1>Resume</h1>
      <a href={resume}>
        <img src={resumeIcon} alt="Resume Icon" id="resumeIcon" />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
import React from "react";
import "../../styles/index.css";
import profilePic from "../../assets/images/profilePic";

const AboutMe = () => {
  return (
    <div id="about-me">
      <h1>About Me</h1>
      <img src={profilePic} alt="Jackie Burch" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
        nunc eget nibh rutrum consequat. Donec at egestas leo. Duis felis felis,
        viverra vel vehicula vel, fermentum a arcu. Donec ut ultrices eros. Sed
        volutpat augue non leo feugiat sollicitudin. Sed consequat, lorem eu
        aliquam porttitor, diam leo vulputate ante, a blandit eros magna eu nisl.
        Donec tincidunt, augue eget ultrices malesuada, ipsum sapien
      </p>
    </div>
  );
};

export default AboutMe;
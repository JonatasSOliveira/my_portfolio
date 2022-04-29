import "../../styles/components/AboutMe/style.css";

import React from "react";
import aboutMe from "../../values/aboutMe";

function AboutMe() {
  return (
    <section className="section_about_me">
      <h2 className="section_title">About Me</h2>
      {aboutMe.split("#break#").map((paragraph: string, index: number) => (
        <p key={index}>&emsp;&emsp;{paragraph.trim()}</p>
      ))}
    </section>
  );
}

export default AboutMe;

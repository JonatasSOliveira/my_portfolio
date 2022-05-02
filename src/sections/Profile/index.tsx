import "../../styles/sections/Profile/index.css";

import React from "react";

function Profile() {
  return (
    <section className="section_profile">
      <div>
        <p className="greetings animation_typewriter">Hello, I'm</p>
        <h1 className="title animation_typewriter">Jonatas S. Oliveira</h1>
        <p className="subtitle animation_typewriter">
          a <span className="contrast">fullstack developer</span>
        </p>
      </div>
    </section>
  );
}

export default Profile;

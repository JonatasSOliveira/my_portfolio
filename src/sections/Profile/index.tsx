import "../../styles/sections/Profile/index.css";

import React from "react";

function Profile() {
  return (
    <section className="section_profile">
      <div>
        <p className="greetings">Hello, I'm</p>
        <h1 className="title">Jonatas S. Oliveira</h1>
        <p className="subtitle">
          a <span className="contrast">fullstack developer</span>
        </p>
      </div>
    </section>
  );
}

export default Profile;

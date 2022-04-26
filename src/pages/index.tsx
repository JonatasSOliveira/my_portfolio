import "../styles/normalize.css";
import "../styles/pages/main/style.css";

import * as React from "react";

import Header from "../components/Header/index";

// sections
import Profile from "../sections/Profile/index";
import Formation from "../sections/Formation/index";
import Competences from "../sections/Competences/index";
import ProfissionalRail from "../sections/ProfissionalRail/index";
import MyWork from "../sections/MyWork/index";
import AboutMe from "../sections/AboutMe/index";
import Contact from "../sections/Contact";

const IndexPage = () => {
  return (
    <main className="screen_initial">
      <Header />
      <div className="container">
        <Profile />
        <Formation />
        <ProfissionalRail />
        <MyWork />
        <AboutMe />
        <Competences />
        <Contact />
      </div>
    </main>
  );
};

export default IndexPage;

import "../../styles/normalize.css";
import "../../styles/pages/main/style.css";
import "../../styles/global/style.css";
import "../../styles/animations/style.css";

import * as React from "react";

import Header from "../Header/index";

// sections
import Profile from "../../sections/Profile/index";
import Formation from "../../sections/Formation/index";
import Competences from "../../sections/Competences/index";
import ProfissionalTrail from "../../sections/ProfissionalTrail/index";
import MyWork from "../../sections/MyWork/index";
import AboutMe from "../../sections/AboutMe/index";
import Contact from "../../sections/Contact";

export type PageProps = {
  language: "en" | "pt-br";
};

function Page({ language }: PageProps) {
  return (
    <main className="screen_initial">
      <Header />
      <div className="container">
        <Profile language={language} />
        <Formation language={language} />
        <ProfissionalTrail language={language} />
        <MyWork language={language} />
        <AboutMe language={language} />
        <Competences language={language} />
        <Contact language={language} />
      </div>
    </main>
  );
}

export default Page;

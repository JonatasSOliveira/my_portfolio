import React from "react";

// images
import logoJS from "../../images/logo_js.png";
import logoGit from "../../images/logo_git.png";
import logoGitHub from "../../images/logo_github.png";
import logoExpo from "../../images/logo_expo.png";
import logoJava from "../../images/logo_java.png";
import logoNode from "../../images/logo_node.png";
import logoMySql from "../../images/logo_mysql.png";
import logoReact from "../../images/logo_reactjs.png";
import logoElectron from "../../images/logo_electron.png";

import Competence from "../../components/Competence/index";

function Competences() {
  return (
    <section id="section_competence">
      <h2 className="section_title">Competences</h2>
      <div className="section_container">
        <Competence image={logoJS} text="Javascript" />
        <Competence image={logoGit} text="Git" />
        <Competence image={logoGitHub} text="GitHub" />
        <Competence image={logoExpo} text="Expo" />
        <Competence image={logoJava} text="Java" />
        <Competence image={logoNode} text="NodeJS" />
        <Competence image={logoMySql} text="MySQL" />
        <Competence image={logoReact} text="ReactJS" />
        <Competence image={logoElectron} text="ElectronJS" />
      </div>
    </section>
  );
}

export default Competences;

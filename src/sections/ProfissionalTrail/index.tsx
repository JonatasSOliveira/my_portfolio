import React from "react";
import { PageProps } from "../../components/Page";

function ProfissionalTrail({ language }: PageProps) {
  return (
    <section>
      <h2 className="section_title">My Profissional Trail</h2>
      <ul>
        <li>
          <p>ÁPICE SISTEMAS</p>
          <p>Fullstack Develop WEB/MOBILE</p>
          <p>2019 - Today</p>
        </li>
      </ul>
    </section>
  );
}

export default ProfissionalTrail;

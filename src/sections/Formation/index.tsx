import React from "react";
import { PageProps } from "../../components/Page";

function Formation({ language }: PageProps) {
  return (
    <section>
      <h2 className="section_title">My Formation</h2>
      <ul>
        <li>
          <p>INSTITUTO FEDERAL DO PARANÁ - CAMPUS PARANAVAÍ</p>
          <p>Bacharelado em Engenharia de Software</p>
          <p>2020 - Today</p>
        </li>
        <li>
          <p>INSTITUTO FEDERAL DO PARANÁ - CAMPUS PARANAVAÍ</p>
          <p>Técnico em Informática Integrado</p>
          <p>2016 - 2019</p>
        </li>
      </ul>
    </section>
  );
}

export default Formation;

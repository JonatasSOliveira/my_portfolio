import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import { PageProps } from "../../components/Page";

function Contact({ language }: PageProps) {
  return (
    <section>
      <h2 className="section_title">Contact</h2>
      <a
        href="https://www.linkedin.com/in/jonatas-oliveira-6b1b84203"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </a>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>dev.jonatas.oliveira@gmail.com</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>(44) 98456-3076</span>
      </div>
    </section>
  );
}

export default Contact;

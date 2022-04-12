import "../styles/normalize.css";
import "../styles/index/style.css";

import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <main className="screen_initial">
      <section>
        <p>Helo, I'm</p>
        <h1>Jonatas S. Oliveira</h1>
        <p>a fullstack developer</p>
      </section>
      <section>
        <h2 className="section_title">My Formation</h2>
      </section>
      <section>
        <h2 className="section_title">My Profissional Rail</h2>
      </section>
      <section>
        <h2 className="section_title">My Works</h2>
      </section>
      <section>
        <h2 className="section_title">Contact</h2>
      </section>
    </main>
  )
}

export default IndexPage

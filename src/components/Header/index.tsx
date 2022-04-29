import "../../styles/components/Header/style.css";

import React, { useState, useEffect, useRef } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const profileSectionHeight = useRef(0);

  function onScroll() {
    if (window.scrollY > profileSectionHeight.current) setIsScrolled(true);
    else setIsScrolled(false);
  }

  useEffect(() => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    profileSectionHeight.current = 0.04 * vh;

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`component_header ${isScrolled ? "" : "hide"}`}
      id="component_header"
    >
      <h2>Jonatas S Oliveira</h2>
    </header>
  );
}

export default Header;

// Header.tsx
import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import colombiaIcon from "../../assets/colombia.png";
import eeuuIcon from "../../assets/eeuu.png";
import Hv from "../../assets/HV.pdf";
import Resume from "../../assets/Resume.pdf";

import { useLanguage } from "../../context/LanguageContext";

export function Header() {
  const [isActive, setActive] = useState(false);
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }
  const resumeFile = language === "en" ? Resume : Hv;

  return (
    <Container className="header-fixed">
      <Router>
        <button
          onClick={() => changeLanguage(language === "en" ? "es" : "en")}
          className="language-switch"
        >
          <img
            src={language === "en" ? eeuuIcon : colombiaIcon}
            alt={language === "en" ? "USA" : "Colombia"}
          />
          <span className={language === "en" ? "language-en" : "language-es"}>
            {language === "en" ? "EN" : "ES"}
          </span>
        </button>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            {t("home")}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            {t("about_me")}
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            {t("project")}
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            {t("contact")}
          </NavHashLink>
          <a href={resumeFile} download className="button">
            {t("resume")}
          </a>
        </nav>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}

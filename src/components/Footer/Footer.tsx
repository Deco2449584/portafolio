import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";
// import discordIcon from '../../assets/discord.png'
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <Container className="footer">
      <a href="https://danielcaro.online" className="logo">
        <span>DanielCaro</span>
        <span>.online</span>
      </a>

      <div>
        <p>
          {t("footer_made_with")} <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/danielcaro2449584"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Deco2449584"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B573013117452&text=Hello+Daniel"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/danielcaro1997" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/daniel___caro/profilecard/?igsh=bDBlZzZ0c2l1MXBo"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}

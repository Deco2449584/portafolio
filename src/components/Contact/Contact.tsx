import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Container id="contact">
      <header>
        <h2>{t("contact_title")}</h2>
        <p>{t("contact_intro1")}</p>
        <p>{t("contact_intro2")}</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:deco2449584@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:deco2449584@gmail.com">deco2449584@gmail.com</a>
        </div>
        <div>
          <a href="tel:+573013117452">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+573013117452">(+57) 3013117452</a>
        </div>
      </div>
      <Form />
    </Container>
  );
}

import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
import { useTranslation } from "react-i18next";

export function Form() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xlderapo");
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success(t("email_success"), {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  }, [state.succeeded, t]);

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>{t("thanks_message")}</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {t("back_to_top")}
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>{t("form_title")}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={t("email_placeholder")}
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder={t("message_placeholder")}
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey="6LcCb1sqAAAAAArLDGybGQIDRtThbwRM-awfdmo3"
          onChange={(e) => {
            setIsHuman(true);
          }}
        />
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          {t("submit_button")}
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}

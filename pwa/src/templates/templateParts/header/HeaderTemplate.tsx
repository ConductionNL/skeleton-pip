import * as React from "react";
import "./HeaderTemplate.css";
import { Container } from "../../../components/container/Container";
import { navigate } from "gatsby";
import MijnDenHaag from "../../../assets/svgs/MijnDenHaag.svg";
import DenHaag from "../../../assets/svgs/DenHaag.svg";
import { useTranslation } from "react-i18next";
import { Button, Link } from "@gemeente-denhaag/components-react";
import { getUsername } from "../../../services/auth";
import { changeLanguage } from "i18next";

export const AuthenticatedHeaderTemplate: React.FC = () => {
  const { t, i18n } = useTranslation();
  let translationButton;
  if (i18n.language == "nl") {
    translationButton = (
      <Button onClick={() => changeLanguage("en")} variant="secondary-action">
        {t("Translation")}
      </Button>
    );
  } else {
    translationButton = (
      <Button onClick={() => changeLanguage("nl")} variant="secondary-action">
        {t("Translation")}
      </Button>
    );
  }

  return (
    <header className="Header Sticky">
      <Container>
        <div className="Header-inner">
          <Link>
            <MijnDenHaag className="Header-inner-mijnDenHaagLogo" />
          </Link>
          <div className="Header-inner-userManagement">
            <a className="Header-inner-username">
              {t("Welcome")} ${getUsername()}
            </a>
            <Button onClick={() => navigate("/logout")}>{t("Logout")}</Button>
            {translationButton}
          </div>
        </div>
      </Container>
    </header>
  );
};

export const UnauthenticatedHeaderTemplate: React.FC = () => {
  return (
    <header className="UnauthenticatedHeader">
      <DenHaag className="Header-denHaagLogo" />
    </header>
  );
};

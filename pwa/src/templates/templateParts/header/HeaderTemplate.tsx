import * as React from "react";
import "./HeaderTemplate.css";
import { Container } from "../../../components/container/Container";
import { Link, navigate } from "gatsby";
import MijnDenHaagLogo from "../../../assets/svgs/MijnDenHaag.svg";
import DenHaagLogo from "../../../assets/svgs/DenHaag.svg";
import { useTranslation } from "react-i18next";
import { Button } from "@gemeente-denhaag/components-react";
import { getUsername } from "../../../services/auth";
import { changeLanguage } from "i18next";

export const AuthenticatedHeaderTemplate: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="AuthenticatedHeaderTemplate">
      <Container>
        <div className="AuthenticatedHeaderTemplate-inner">
          <Link to="/">
            <MijnDenHaagLogo className="AuthenticatedHeaderTemplate-inner-mijnDenHaagLogo" />
          </Link>

          <div className="AuthenticatedHeaderTemplate-inner-userManagement">
            <a className="AuthenticatedHeaderTemplate-inner-username">{`${t("Welcome")} ${getUsername()}`}</a>

            <Button onClick={() => navigate("/logout")}>{t("Logout")}</Button>

            <Button onClick={() => changeLanguage(i18n.language === "nl" ? "en" : "nl")} variant="secondary-action">
              {t("Translation")}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export const UnauthenticatedHeaderTemplate: React.FC = () => (
  <header className="UnauthenticatedHeaderTemplate">
    <DenHaagLogo className="UnauthenticatedHeaderTemplate-denHaagLogo" />
  </header>
);

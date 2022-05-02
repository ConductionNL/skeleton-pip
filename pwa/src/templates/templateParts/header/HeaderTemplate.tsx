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
import clsx from "clsx";
import { AuthenticatedImageDivider } from "../../../components/imageDivider/imageDivider";
import { UnauthenticatedImageDivider } from "../../../components/imageDivider/imageDivider";
import AuthenticatedDividerImage from "./../../../assets/images/AuthenticatedDivider.png";
import UnauthenticatedDividerImage from "./../../../assets/images/UnauthenticatedHeaderDivider.png";

interface AuthenticatedHeaderTemplateProps {
  layoutClassName?: string;
}

export const AuthenticatedHeaderTemplate: React.FC<AuthenticatedHeaderTemplateProps> = ({ layoutClassName }) => {
  const { t, i18n } = useTranslation();

  return (
    <header className={clsx("AuthenticatedHeaderTemplate", [layoutClassName && layoutClassName])}>
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
      <AuthenticatedImageDivider
        image={AuthenticatedDividerImage}
        layoutClassName="AuthenticatedHeaderTemplate-divider"
      />
    </header>
  );
};

export const UnauthenticatedHeaderTemplate: React.FC = () => (
  <header className="UnauthenticatedHeaderTemplate">
    <Container>
      <div className="UnauthenticatedHeaderTemplate-inner">
        <DenHaagLogo className="UnauthenticatedHeaderTemplate-denHaagLogo" />
      </div>
    </Container>
    {/* <UnauthenticatedImageDivider
      image={UnauthenticatedDividerImage}
      layoutClassName="AuthenticatedHeaderTemplate-divider"
    /> */}
    <div className="test"></div>
  </header>
);

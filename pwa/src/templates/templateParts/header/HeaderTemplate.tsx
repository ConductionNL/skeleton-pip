import * as React from "react";
import "./HeaderTemplate.css";
import { Container } from "../../../components/container/Container";
import { navigate } from "gatsby";
import MijnDenHaag from "../../../assets/MijnDenHaag.svg";
import DenHaag from "../../../assets/DenHaag.svg";
import { useTranslation } from "react-i18next";
import { Button } from "@gemeente-denhaag/components-react";
import { getUsername } from "../../../services/auth";
import { isLoggedIn } from "../../../services/auth";
import { changeLanguage } from "i18next";

export const HeaderTemplate: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="Header">
      {!isLoggedIn() ? <DenHaag className="Header-denHaagLogo" /> : <></>}
      <Container>
        <div className="Header-inner">
          {isLoggedIn() ? <MijnDenHaag className="Header-inner-mijnDenHaagLogo" /> : <></>}
          <div className="Header-inner-userManagement">
            <a className="Header-inner-username">{isLoggedIn() ? `${t("Welcome")} ${getUsername()}` : <></>}</a>
            {isLoggedIn() ? <Button onClick={() => navigate("/logout")}>{t("Logout")}</Button> : <></>}
            {isLoggedIn() ? (
              <Button onClick={() => changeLanguage(t("changeLanguage"))} variant="secondary-action">
                {t("Translation")}
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

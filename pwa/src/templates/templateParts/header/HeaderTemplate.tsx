import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "../../../components/container/Container";
import { Link, navigate } from "gatsby";
import MijnDenHaagLogo from "../../../assets/svgs/MijnDenHaag.svg";
import DenHaagLogo from "../../../assets/svgs/DenHaag.svg";
import { useTranslation } from "react-i18next";
import { Button } from "@gemeente-denhaag/components-react";
import { getUsername } from "../../../services/auth";
import { changeLanguage } from "i18next";
import clsx from "clsx";
import { ImageDivider } from "../../../components/imageDivider/imageDivider";
import dividerImage from "./../../../assets/images/divider.png";

interface AuthenticatedHeaderTemplateProps {
  layoutClassName?: string;
}

export const AuthenticatedHeaderTemplate: React.FC<AuthenticatedHeaderTemplateProps> = ({ layoutClassName }) => {
  const { t, i18n } = useTranslation();

  return (
    <header className={clsx(styles.authenticatedContainer, [layoutClassName && layoutClassName])}>
      <Container>
        <div className={styles.authenticatedContent}>
          <Link to="/">
            <MijnDenHaagLogo className={styles.authenticatedLogo} />
          </Link>

          <div className={styles.usermanagment}>
            <a className={styles.username}>{`${t("Welcome")} ${getUsername()}`}</a>

            <Button onClick={() => navigate("/logout")}>{t("Logout")}</Button>
            <Button onClick={() => changeLanguage(i18n.language === "nl" ? "en" : "nl")} variant="secondary-action">
              {t("Translation")}
            </Button>
          </div>
        </div>
      </Container>
      <ImageDivider image={dividerImage} layoutClassName={styles.authenticatedDivider} />
    </header>
  );
};

export const UnauthenticatedHeaderTemplate: React.FC = () => (
  <header className={styles.unauthenticatedContainer}>
    <DenHaagLogo className={styles.unauthenticatedLogo} />
  </header>
);

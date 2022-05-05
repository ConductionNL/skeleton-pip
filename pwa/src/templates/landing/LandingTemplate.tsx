import * as React from "react";
import { Container } from "../../components/container/Container";
import { Card, Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { navigate } from "gatsby";
import { t } from "i18next";
export const LandingTemplate: React.FC = () => {
  return (
    <Container>
      <div className={styles.container}>
          <Heading3>{t("Log in to MijnDenHaag")}</Heading3>
          <Paragraph>
            {t(
              "In the personal online environment MijnDenHaag you can easily, quickly and safely arrange matters with the municipality. " +
              "Bewoners kunnen bijvoorbeeld een verhuizing doorgeven of extra parkeertegoed kopen via DigiD. " +
              "Bedrijven kunnen eenvoudig online zaken regelen via eHerkenning.",
            )}
          </Paragraph>
          <Card title={t("Login")} onClick={() => navigate("/login")} subTitle={t("Account")} />
      </div>
    </Container>
  );
};

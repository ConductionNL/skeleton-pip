import * as React from "react";
import { Container } from "../../components/container/Container";
import { Card, Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { navigate } from "gatsby";
import { t } from "i18next";
import { redirectToDigiD } from "../../services/auth";

export const LandingTemplate: React.FC = () => {
  return (
    <Container>
      <div className={styles.container}>
        <div>
          <Heading3>{t("Log in to MijnDenHaag")}</Heading3>
          <Paragraph>
            {t(
              "In the personal online environment MijnDenHaag you can easily, quickly and safely arrange matters with the municipality. For example, residents can report a move or buy extra parking credit via DigiD. Companies can easily arrange business online via eHerkenning.",
            )}
          </Paragraph>
        </div>

        <div className={styles.loginCards}>
          <Card title={t("Login")} subTitle={t("Account")} onClick={() => navigate("/login")} />
          <Card title={t("DigiDLogin")} subTitle={t("Account")} onClick={() => redirectToDigiD()} />
        </div>
      </div>
    </Container>
  );
};

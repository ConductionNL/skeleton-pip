import * as React from "react";
import { Container } from "../../components/container/Container";
import { Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { t } from "i18next";
import { LandingPageCard } from "../../components/card/landingPageCard/LandingPageCard";
import { UserIcon } from "@gemeente-denhaag/icons";
import DigidImage from "../../assets/svgs/digid.svg";

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
          <LandingPageCard title={t("Inloggen met je DigID")} label={t("Login")} img={DigidImage} link={"#"} external />
          <LandingPageCard
            icon={<UserIcon />}
            label={t("Login")}
            title={t("Log in with your account")}
            link={"/login"}
          />
        </div>
      </div>
    </Container>
  );
};

import * as React from "react";
import { Container } from "../../components/container/Container";
import { Card, Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import * as styles from "./LandingTemplate.module.css";
import { navigate } from "gatsby";
export const LandingTemplate: React.FC = () => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading3>Inloggen bij MijnDenHaag</Heading3>
          <Paragraph className={styles.paragraph}>
            In de persoonlijke online omgeving MijnDenHaag kunt u makkelijk, snel en veilig zaken regelen bij de
            gemeente. Bewoners kunnen bijvoorbeeld een verhuizing doorgeven of extra parkeertegoed kopen via DigiD.
            Bedrijven kunnen eenvoudig online zaken regelen via eHerkenning.
          </Paragraph>
        </div>
        <div className={styles.body}>
          <Card
            className={styles.card}
            title={"Login"}
            onClick={() => navigate("/login")}
            subTitle={"Account"}
          />
        </div>
      </div>
    </Container>
  );
};

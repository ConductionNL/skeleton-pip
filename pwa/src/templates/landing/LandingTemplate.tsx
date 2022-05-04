import * as React from "react";
import { Container } from "../../components/container/Container";
import { Card, Heading3, Paragraph } from "@gemeente-denhaag/components-react";
import "./LandingTemplate.css";
import { navigate } from "gatsby";
export const LandingTemplate: React.FC = () => {
  return (
    <Container>
      <div className="LandingTemplate">
        <div className="LandingTemplate-header">
          <Heading3>Inloggen bij MijnDenHaag</Heading3>
          <Paragraph>
            In de persoonlijke online omgeving MijnDenHaag kunt u makkelijk, snel en veilig zaken regelen bij de
            gemeente. Bewoners kunnen bijvoorbeeld een verhuizing doorgeven of extra parkeertegoed kopen via DigiD.
            Bedrijven kunnen eenvoudig online zaken regelen via eHerkenning.
          </Paragraph>
        </div>
        <div className="LandingTemplate-body">
          <Card
            className={"LandingTemplate-body-card"}
            title={"Login"}
            onClick={() => navigate("/login")}
            subTitle={"Account"}
          />
        </div>
      </div>
    </Container>
  );
};

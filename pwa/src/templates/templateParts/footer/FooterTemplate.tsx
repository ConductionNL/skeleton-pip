import * as React from "react";
import "./FooterTemplate.css";
import { Container } from "../../../components/container/Container";
import { List, ListItem, ListSubheader } from "@gemeente-denhaag/list";
import { navigate } from "gatsby";
import { ImageDivider } from "../../../components/imageDivider/imageDivider";
import dividerImage from "./../../../assets/images/divider.png";

export const AuthenticatedFooterTemplate: React.FC = () => {
  return (
    <footer className="AuthenticatedFooterTemplate">
      <ImageDivider image={dividerImage} layoutClassName="Footer-divider" />
      <Container>
        <div className="Footer-inner">
          <List>
            <ListSubheader>The Hague</ListSubheader>
            <ListItem primaryText="Go to denhaag.nl" actionType="nav" onClick={() => navigate("#")} />
          </List>

          <List>
            <ListSubheader>Disclaimers</ListSubheader>
            <ListItem primaryText="Accessibility declaration" actionType="nav" onClick={() => navigate("#")} />
            <ListItem primaryText="Data Protection declaration" actionType="nav" onClick={() => navigate("#")} />
            <ListItem primaryText="Proclaimer" actionType="nav" onClick={() => navigate("#")} />
          </List>
        </div>
      </Container>
    </footer>
  );
};

export const UnauthenticatedFooterTemplate: React.FC = () => {
  return (
    <footer className="UnauthenticatedFooterTemplate">
      <ImageDivider image={dividerImage} layoutClassName="AuthenticatedHeaderTemplate-divider" />
    </footer>
  );
};

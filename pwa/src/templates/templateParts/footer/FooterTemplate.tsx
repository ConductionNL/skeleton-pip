import * as React from "react";
import "./FooterTemplate.css";
import { Container } from "../../../components/container/Container";
import { List, ListItem, ListSubheader } from "@gemeente-denhaag/list";
import { navigate } from "gatsby";

export const FooterTemplate: React.FC = () => {
  return (
    <footer className="Footer">
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

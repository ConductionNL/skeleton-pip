import * as React from "react";
import "./FooterTemplate.css";
import { Container } from "../../../components/container/Container";
import { List, ListItem, ListSubheader } from "@gemeente-denhaag/list";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

export const AuthenticatedFooterTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="AuthenticatedFooterTemplate">
      <Container>
        <div className="Footer-inner">
          <List>
            <ListSubheader>{t("The Hague")}</ListSubheader>
            <ListItem primaryText={t("Go to website")} actionType="nav" onClick={() => navigate("#")} />
          </List>

          <List>
            <ListSubheader>{t("Disclaimers")}</ListSubheader>
            <ListItem primaryText={t("Accessibility declaration")} actionType="nav" onClick={() => navigate("#")} />
            <ListItem primaryText={t("Data Protection declaration")} actionType="nav" onClick={() => navigate("#")} />
            <ListItem primaryText={t("Proclaimer")} actionType="nav" onClick={() => navigate("#")} />
          </List>
        </div>
      </Container>
    </footer>
  );
};

export const UnauthenticatedFooterTemplate: React.FC = () => {
  return <footer className="UnauthenticatedFooterTemplate"></footer>;
};

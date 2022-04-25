import * as React from "react";
import "./DashboardTemplate.css";
import { PrivateRoute } from "../../components/privateRoute/privateRoute";
import { Container } from "../../components/container/Container";

export const DashboardTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="DashboardTemplate">
        <div className="DashboardTemplate-menu">Menu</div>

        <div className="DashboardTemplate-content">{children}</div>
      </div>
    </Container>
  );
};

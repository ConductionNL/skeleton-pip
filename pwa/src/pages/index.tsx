import * as React from "react";
import { isLoggedIn } from "../services/auth";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { LandingTemplate } from "../templates/landing/LandingTemplate";

const IndexPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <h1>hoi</h1>
    </DashboardTemplate>
  );
  // return isLoggedIn() ? <DashboardTemplate /> : <LandingTemplate />;
};

export default IndexPage;

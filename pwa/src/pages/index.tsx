import * as React from "react";
import { isLoggedIn } from "../services/auth";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { LandingTemplate } from "../templates/landing/LandingTemplate";
import { OverviewTemplate } from "../templates/templateParts/overview/OverviewTemplate";

const IndexPage: React.FC = () => {
  return isLoggedIn() ? (
    <DashboardTemplate>
      <OverviewTemplate />
    </DashboardTemplate>
  ) : (
    <LandingTemplate />
  );
};

export default IndexPage;

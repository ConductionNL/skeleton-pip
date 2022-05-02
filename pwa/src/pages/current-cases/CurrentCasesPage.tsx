import * as React from "react";
import { DashboardTemplate } from "../../templates/dashboard/DashboardTemplate";
import { CurrentCasesTemplate } from "../../templates/templateParts/currentCases/CurrentCasesTemplate";

const CurrentCasesPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <CurrentCasesTemplate />
    </DashboardTemplate>
  );
};

export default CurrentCasesPage;

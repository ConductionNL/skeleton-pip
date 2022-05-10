import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { StartServiceTemplate } from "../../../templates/services/startService/StartServiceTemplate";

const StartServicePage: React.FC = () => {
  return (
    <DashboardTemplate>
      <StartServiceTemplate />
    </DashboardTemplate>
  );
};

export default StartServicePage;

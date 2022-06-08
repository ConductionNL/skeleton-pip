import * as React from "react";
import { MarriageServiceForm } from "../../../../e-services/marriage/MarriageServiceForm";
import { DashboardTemplate } from "../../../../templates/dashboard/DashboardTemplate";

const MarriageFormPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MarriageServiceForm />
    </DashboardTemplate>
  );
};

export default MarriageFormPage;

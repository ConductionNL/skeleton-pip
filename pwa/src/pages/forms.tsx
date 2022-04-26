import * as React from "react";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { FormsTemplate } from "../templates/templateParts/forms/FormsTemplate";

const FormsPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <FormsTemplate />
    </DashboardTemplate>
  );
};

export default FormsPage;

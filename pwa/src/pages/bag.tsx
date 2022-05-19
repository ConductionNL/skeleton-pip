import * as React from "react";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { BagTemplate } from "../templates/templateParts/bag/BagTemplate";

const bagPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <BagTemplate />
    </DashboardTemplate>
  );
};

export default bagPage;

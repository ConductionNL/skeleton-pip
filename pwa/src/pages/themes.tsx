import * as React from "react";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { ThemesTemplate } from "../templates/templateParts/themes/ThemesTemplate";

const ThemesPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <ThemesTemplate />
    </DashboardTemplate>
  );
};

export default ThemesPage;

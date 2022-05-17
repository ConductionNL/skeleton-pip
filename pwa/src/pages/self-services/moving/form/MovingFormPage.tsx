import * as React from "react";
import { MovingForm } from "../../../../forms/moving/MovingForm";
import { DashboardTemplate } from "../../../../templates/dashboard/DashboardTemplate";

const MovingFormPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MovingForm />
    </DashboardTemplate>
  );
};

export default MovingFormPage;

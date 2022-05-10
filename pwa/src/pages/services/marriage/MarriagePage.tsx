import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { IProcessSteps, StartServiceTemplate } from "../../../templates/services/startService/StartServiceTemplate";

const MarriagePage: React.FC = () => {
  return (
    <DashboardTemplate>
      <StartServiceTemplate processSteps={steps} />
    </DashboardTemplate>
  );
};

export default MarriagePage;

const steps: IProcessSteps[] = [
  { step: "Choose between getting married or registered partnership." },
  { step: "Choose a date and time for the meeting." },
  { step: "Log in with DigID." },
  { step: "Your partner also logs in with DigID." },
  { step: "Invite witnesses. Pay with IDEAL." },
  { step: "Your date is set!" },
];

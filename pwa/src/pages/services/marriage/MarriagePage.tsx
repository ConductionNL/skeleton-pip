import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { IMoreInformationLinks, IProcessSteps, StartServiceTemplate } from "../../../templates/services/startService/StartServiceTemplate";

const MarriagePage: React.FC = () => {
  return (
    <DashboardTemplate>
      <StartServiceTemplate processSteps={ProcessSteps} />
    </DashboardTemplate>
  );
};

export default MarriagePage;

const ProcessSteps: IProcessSteps[] = [
  { step: "Choose between getting married or registered partnership" },
  { step: "Choose a date and time for the meeting" },
  { step: "Log in with DigID" },
  { step: "Your partner also logs in with DigID" },
  { step: "Invite witnesses" },
  { step: "Pay with IDEAL" },
  { step: "Your date is set!" },
];

const moreInformation: IMoreInformationLinks[] = [
  { description: "Choose between getting married or registered partnership", link: ""},
  { description: "Choose a date and time for the meeting", link: ""},
  { description: "Log in with DigID", link: ""},
  { description: "Your partner also logs in with DigID", link: ""},
  { description: "Invite witnesses", link: ""},
  { description: "Pay with IDEAL", link: ""},
  { description: "Your date is set!", link: ""},
];

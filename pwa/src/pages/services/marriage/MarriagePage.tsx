import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import {
  IMoreInformationLinks,
  IProcessSteps,
  StartServiceTemplate,
} from "../../../templates/services/startService/StartServiceTemplate";

const MarriagePage: React.FC = () => {
  return (
    <DashboardTemplate>
      <StartServiceTemplate
        title="Mariage / Partnership"
        description="Are you getting married or getting a registerd partnership? Schedule a date and time. And make the official report to the municipality. Note: keep your DigiD to hand."
        processSteps={ProcessSteps}
        moreInformationLinks={moreInformation}
      />
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
  { description: "Choose between getting married or registered partnership", link: "/services/marriage" },
  { description: "Choose a date and time for the meeting", link: "/services/marriage" },
  { description: "Log in with DigID", link: "/services/marriage" },
  { description: "Your partner also logs in with DigID", link: "/services/marriage" },
  { description: "Invite witnesses", link: "/services/marriage" },
  { description: "Pay with IDEAL", link: "/services/marriage" },
  { description: "Your date is set!", link: "/services/marriage" },
];

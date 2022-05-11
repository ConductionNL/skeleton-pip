import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import {
  IMoreInformationLinks,
  IProcessSteps,
  StartServiceTemplate,
} from "../../../templates/templateParts/selfServices/startService/StartServiceTemplate";

const MarriagePage: React.FC = () => {
  return (
    <DashboardTemplate>
      <StartServiceTemplate
        title="Marriage / Partnership"
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
  {
    description: "What are the differences between a marriage, a registered partnership and a cohabitation contract?",
    link: "/self-services/marriage",
  },
  { description: "What is an emergency marriage and how can you arrange it?", link: "/self-services/marriage" },
];

import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import {
  IMoreInformationLinks,
  IProcessSteps,
  StartServiceTemplate,
} from "../../../templates/templateParts/startService/StartServiceTemplate";

const MovingPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <StartServiceTemplate
        title="Moving away"
        description="Are you moving to a different house? Schedule a date and time. And make the official report to the municipality. Note: keep your DigiD to hand."
        processSteps={ProcessSteps}
        moreInformationLinks={moreInformation}
      />
    </DashboardTemplate>
  );
};

export default MovingPage;

const ProcessSteps: IProcessSteps[] = [
  { step: "Choose your current addres" },
  { step: "Choose your new address" },
  { step: "Log in with DigID" },
  { step: "And your set!" },
];

const moreInformation: IMoreInformationLinks[] = [
  {
    description: "What is a zipcode?",
    link: "/self-services/moving",
  },
  { description: "What do I do when I settle in a different municipality?", link: "/self-services/moving" },
  { description: "What is the meaning of life?", link: "https://en.wikipedia.org/wiki/42_(number)" },
];

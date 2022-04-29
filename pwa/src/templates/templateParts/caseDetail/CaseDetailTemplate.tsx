import * as React from "react";
import "./CaseDetailTemplate.css";
import { Divider, Heading2, Heading3, Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ChevronLeftIcon, ArchiveIcon, CalendarIcon, MegaphoneIcon, DocumentIcon } from "@gemeente-denhaag/icons";
import { MetaIconGridTemplate } from "../metaIconGrid/MetaIconGridTemplate";
import { StatusSteps } from "../../../components/statusSteps/StatusSteps";

interface CaseDetailTemplateProps {
  caseId: string;
}

export const CaseDetailTemplate: React.FC<CaseDetailTemplateProps> = ({ caseId }) => {
  return (
    <div className="CaseDetailTemplate">
      <div onClick={() => navigate("/current-cases")}>
        <Link icon={<ChevronLeftIcon />} iconAlign="start">
          Current cases
        </Link>
      </div>

      <Heading2>Case 1</Heading2>

      <MetaIconGridTemplate
        metaIcons={[
          { icon: <ArchiveIcon />, label: "Case number", value: "ceb3b7cb-0da2" },
          { icon: <CalendarIcon />, label: "Application date", value: "26 April 2022" },
          { icon: <MegaphoneIcon />, label: "Status", value: "Registered" },
          { icon: <DocumentIcon />, label: "Documents", value: "1" },
        ]}
      />

      <Divider />

      <div className="CaseDetailTemplate-status">
        <Heading3>Current status</Heading3>

        <StatusSteps
          steps={[
            {
              title: "Registered",
              checked: true,
              subSteps: ["Consectetur ac, vestibulum at eros."],
            },
            {
              title: "Accepted",
              checked: true,
              current: true,
              expanded: true,
              subSteps: ["Curabitur blandit tempus porttitor."],
            },
            {
              title: "Under consideration",
              expanded: true,
              subSteps: ["Nullam id dolor id nibh ultricies vehicula."],
            },
            {
              title: "Concluded",
            },
          ]}
        />
      </div>

      <Divider />
    </div>
  );
};

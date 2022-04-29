import * as React from "react";
import "./CaseDetailTemplate.css";
import { Heading2, Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ChevronLeftIcon, ArchiveIcon, CalendarIcon, MegaphoneIcon, DocumentIcon } from "@gemeente-denhaag/icons";
import { MetaIconGridTemplate } from "../metaIconGrid/MetaIconGridTemplate";

interface CaseDetailTemplateProps {
  caseId: string;
}

export const CaseDetailTemplate: React.FC<CaseDetailTemplateProps> = ({ caseId }) => {
  return (
    <div className="CaseDetailTemplate">
      <div className="CaseDetailTemplate-back" onClick={() => navigate("/current-cases")}>
        <Link icon={<ChevronLeftIcon />} iconAlign="start">
          Current cases
        </Link>
      </div>

      <Heading2>Heading</Heading2>

      <MetaIconGridTemplate
        metaIcons={[
          { icon: <ArchiveIcon />, label: "Case number", value: "ceb3b7cb-0da2" },
          { icon: <CalendarIcon />, label: "Application date", value: "26 April 2022" },
          { icon: <MegaphoneIcon />, label: "Status", value: "Registered" },
          { icon: <DocumentIcon />, label: "Documents", value: "1" },
        ]}
      />
    </div>
  );
};

import * as React from "react";
import "./CaseDetailTemplate.css";

interface CaseDetailTemplateProps {
  caseId: string;
}

export const CaseDetailTemplate: React.FC<CaseDetailTemplateProps> = ({ caseId }) => {
  return <div className="CaseDetailTemplate">{caseId}</div>;
};

import * as React from "react";
import { PageProps } from "gatsby";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { MessageDetailTemplate } from "../../../templates/templateParts/messageDetail/MessageDetailTemplate";

const CurrentCasesPage: React.FC<PageProps> = (props: PageProps) => {
  return (
    <DashboardTemplate>
      <MessageDetailTemplate caseId={props.params.caseId} />
    </DashboardTemplate>
  );
};

export default CurrentCasesPage;

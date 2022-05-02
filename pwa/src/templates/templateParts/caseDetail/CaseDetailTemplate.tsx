import * as React from "react";
import "./CaseDetailTemplate.css";
import { Divider, Heading2, Heading3, Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import {
  ChevronLeftIcon,
  ArchiveIcon,
  CalendarIcon,
  MegaphoneIcon,
  DocumentIcon,
  ArrowRightIcon,
} from "@gemeente-denhaag/icons";
import { MetaIconGridTemplate } from "../metaIconGrid/MetaIconGridTemplate";
import { StatusSteps } from "../../../components/statusSteps/StatusSteps";
import { DownloadCard } from "../../../components/card";
import { useTranslation } from "react-i18next";

interface CaseDetailTemplateProps {
  caseId: string;
}

export const CaseDetailTemplate: React.FC<CaseDetailTemplateProps> = ({ caseId }) => {
  const { t } = useTranslation();

  return (
    <div className="CaseDetailTemplate">
      <div onClick={() => navigate("/current-cases")}>
        <Link icon={<ChevronLeftIcon />} iconAlign="start">
          {t("Current cases")}
        </Link>
      </div>

      <Heading2>{t("Case one")}</Heading2>

      <MetaIconGridTemplate
        metaIcons={[
          { icon: <ArchiveIcon />, label: t("Case number"), value: "ceb3b7cb-0da2" },
          { icon: <CalendarIcon />, label: t("Application date"), value: "26 April 2022" },
          { icon: <MegaphoneIcon />, label: t("Status"), value: "Registered" },
          { icon: <DocumentIcon />, label: t("Documents"), value: "1" },
        ]}
      />

      <Divider />

      <div className="CaseDetailTemplate-status">
        <Heading3>{t("Current status")}</Heading3>

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

      <div className="CaseDetailTemplate-documents">
        <div className="CaseDetailTemplate-documentsHeader">
          <Heading3>{t("Documents")}</Heading3>

          <Link icon={<ArrowRightIcon />} iconAlign="end">
            {t("Show all documents")}
          </Link>
        </div>

        <DownloadCard
          layoutClassName="CasedDetailTemplate-downloadCard"
          icon={<DocumentIcon />}
          label="Bezwaar maken overige zaken - DigiD.pdf"
          sizeKb="134"
        />
      </div>
    </div>
  );
};

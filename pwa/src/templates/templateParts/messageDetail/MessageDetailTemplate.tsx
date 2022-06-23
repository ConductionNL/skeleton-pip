import * as React from "react";
import * as styles from "./MessageDetailTemplate.module.css";
import { Divider, Heading3, Paragraph, Tab, TabContext, TabPanel, Tabs } from "@gemeente-denhaag/components-react";
import { CalendarIcon, SettingsIcon, StaffIcon, StarterIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { MetaIconGridTemplate } from "../metaIconGrid/MetaIconGridTemplate";
import { CasesTable } from "../casesTable/CasesTable";
import { useQueryClient } from "react-query";
import { useCase } from "../../../hooks/case";
import Skeleton from "react-loading-skeleton";
import { translateDate } from "../../../services/dateFormat";
import { useMessage } from "../../../hooks/message";
import * as _ from "lodash";

interface MessageDetailTemplateProps {
  messageId: string;
}

export const MessageDetailTemplate: React.FC<MessageDetailTemplateProps> = ({ messageId }) => {
  const [currentCasesTab, setCurrentCasesTab] = React.useState<number>(0);
  const [currentCases, setCurrentCases] = React.useState<any[]>([]);
  const [closedCases, setClosedCases] = React.useState<any[]>([]);
  const [employeeName, setEmployeeName] = React.useState<string>("");
  const { t, i18n } = useTranslation();

  const queryClient = useQueryClient();

  const _useCase = useCase(queryClient);
  const getCases = _useCase.getAll();

  const _useMessage = useMessage(queryClient);
  const getMessage = _useMessage.getOne(messageId);

  React.useEffect(() => {
    if (!getCases.isSuccess) return;

    setCurrentCases(getCases.data.filter((_case) => _case.archiefstatus === "nog_te_archiveren"));
    setClosedCases(getCases.data.filter((_case) => _case.archiefstatus !== "nog_te_archiveren"));
  }, [getCases.isSuccess]);

  React.useEffect(() => {
    if (!getMessage.isSuccess) return;

    const e = getMessage.data.medewerkerNaam;

    setEmployeeName(`${e.voorletters || ""} ${e.achternaamVoorvoegsel || ""} ${e.achternaam || ""}`);
  }, [getMessage.isSuccess]);

  return (
    <div className={styles.container}>
      {!getMessage.isLoading && (
        <>
          <MetaIconGridTemplate
            metaIcons={[
              { icon: <StarterIcon />, label: t("Initiator"), value: _.upperFirst(getMessage.data.initiatiefnemer) },
              { icon: <StaffIcon />, label: t("Collaborator"), value: employeeName },
              { icon: <SettingsIcon />, label: t("Organization"), value: getMessage.data.bronorganisatie },
              {
                icon: <CalendarIcon />,
                label: t("Registration date"),
                value: translateDate(i18n.language, getMessage.data.registratiedatum),
              },
            ]}
          />

          <Divider />

          <Paragraph>{getMessage.data.tekst}</Paragraph>
        </>
      )}

      {getMessage.isLoading && <Skeleton height="200px" />}

      <Divider />

      <TabContext value={currentCasesTab.toString()}>
        <Heading3>{t("The linked cases")}</Heading3>
        <Tabs
          value={currentCasesTab}
          onChange={(_, newValue: number) => {
            setCurrentCasesTab(newValue);
          }}
        >
          <Tab label={t("Current cases")} value={0} />
          <Tab label={t("Closed cases")} value={1} />
        </Tabs>

        <TabPanel value="0">{!getCases.isLoading && <CasesTable cases={currentCases} />}</TabPanel>
        <TabPanel value="1">{!getCases.isLoading && <CasesTable cases={closedCases} />}</TabPanel>

        {getCases.isLoading && <Skeleton height="100px" />}
      </TabContext>
    </div>
  );
};

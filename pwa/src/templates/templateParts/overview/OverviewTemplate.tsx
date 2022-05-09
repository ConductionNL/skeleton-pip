import * as React from "react";
import * as styles from "./OverviewTemplate.module.css";
import { Heading1, Heading3, Link, Tab, TabContext, TabPanel, Tabs, Card } from "@gemeente-denhaag/components-react";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { CasesTable } from "../../../components/casesTable/CasesTable";
import { MessagesTable } from "../../../components/messagesTable/MessagesTable";
import DummyMessages from "../../../data/DummyMessages";
import { useQueryClient } from "react-query";
import { useCase } from "../../../hooks/case";
import Skeleton from "react-loading-skeleton";
import { Container } from "../../../components/container/Container";

export const OverviewTemplate: React.FC = () => {
  const { t } = useTranslation();

  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const [currentCasesTab, setCurrentCasesTab] = React.useState<number>(0);

  const [currentCases, setCurrentCases] = React.useState<any[]>([]);
  const [closedCases, setClosedCases] = React.useState<any[]>([]);

  const queryClient = useQueryClient();
  const _useCase = useCase(queryClient);
  const getCases = _useCase.getAll();

  React.useEffect(() => {
    if (!getCases.isSuccess) return;

    setCurrentCases(getCases.data.filter((_case) => _case.archiefstatus === "nog_te_archiveren"));
    setClosedCases(getCases.data.filter((_case) => _case.archiefstatus !== "nog_te_archiveren"));
  }, [getCases.isSuccess]);

  return (
    <div className={styles.container}>
      <Heading1>{t("Overview")}</Heading1>

      <div className={styles.services}>
        <div className={styles.servicesHeading}>
          <Heading3>{t("Self services")}</Heading3>

          <div onClick={() => navigate("/self-services")}>
            <Link icon={<ArrowRightIcon />} iconAlign="end">
              {t("Show all services")}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <Card title={t("Marriage / Partnership")} />
        <Card title={t("Moving away")} />
        <Card title={t("Birth registration")} />
        <Card title={t("1st Registration")} />
      </div>

      <div className={styles.messages}>
        <div className={styles.messagesHeading}>
          <Heading3>{t("My messages")}</Heading3>

          <div onClick={() => navigate("/my-messages")}>
            <Link icon={<ArrowRightIcon />} iconAlign="end">
              {t("Show all messages")}
            </Link>
          </div>
        </div>

        <TabContext value={currentMessagesTab.toString()}>
          <Tabs
            value={currentMessagesTab}
            onChange={(_, newValue: number) => {
              setCurrentMessagesTab(newValue);
            }}
          >
            <Tab label={t("Unread messages")} value={0} />
            <Tab label={t("Read messages")} value={1} />
          </Tabs>

          <TabPanel value="0">
            <MessagesTable messages={DummyMessages} />
          </TabPanel>
          <TabPanel value="1">
            <MessagesTable messages={DummyMessages.map((message) => ({ ...message, isRead: false }))} />
          </TabPanel>
        </TabContext>
      </div>

      <div className={styles.cases}>
        <div className={styles.casesHeading}>
          <Heading3>{t("My cases")}</Heading3>

          <div onClick={() => navigate("/my-cases")}>
            <Link icon={<ArrowRightIcon />} iconAlign="end">
              {t("Show all cases")}
            </Link>
          </div>
        </div>

        <TabContext value={currentCasesTab.toString()}>
          <Tabs
            value={currentCasesTab}
            onChange={(_, newValue: number) => {
              setCurrentCasesTab(newValue);
            }}
          >
            <Tab label={t("Current cases")} value={0} />
            <Tab label={t("Closed cases")} value={1} />
          </Tabs>

          {getCases.isLoading && <Skeleton height="100px" />}

          <TabPanel value="0">{!getCases.isLoading && <CasesTable cases={currentCases} />}</TabPanel>
          <TabPanel value="1">{!getCases.isLoading && <CasesTable cases={closedCases} />}</TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

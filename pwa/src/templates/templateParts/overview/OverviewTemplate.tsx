import * as React from "react";
import * as styles from "./OverviewTemplate.module.css";
import { Heading1, Heading3, Link, Tab, TabContext, TabPanel, Tabs } from "@gemeente-denhaag/components-react";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { CasesTable, ICaseTableItem } from "../../../components/casesTable/CasesTable";
import { IMessageTableItem, MessagesTable } from "../../../components/messagesTable/MessagesTable";

export const OverviewTemplate: React.FC = () => {
  const { t } = useTranslation();

  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const [currentCasesTab, setCurrentCasesTab] = React.useState<number>(0);

  return (
    <div className={styles.container}>
      <Heading1>{t("Overview")}</Heading1>

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
            <MessagesTable {...{ messages }} />
          </TabPanel>
          <TabPanel value="1">
            <MessagesTable messages={messages.map((message) => ({ ...message, isRead: false }))} />
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

          <TabPanel value="0">
            <CasesTable {...{ cases }} />
          </TabPanel>
          <TabPanel value="1">
            <CasesTable {...{ cases }} />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

const cases: ICaseTableItem[] = [
  { title: "Case title", number: "ceb3b7cb-0da2-4fcb-a1a5-69ed38852a28", status: "Registered", date: "3 mei 2022" },
  { title: "Case title", number: "f9aa6486-2ee9-4fc6-9c49-015ab4eb2afd", status: "Accepted", date: "3 mei 2022" },
  { title: "Case title", number: "28661a53-5bb5-48e3-b055-7e2822e4f70f", status: "Rejected", date: "3 mei 2022" },
  { title: "Case title", number: "7f4ca6d7-4b7e-4e3a-9b59-89087e6b1dab", status: "Registered", date: "3 mei 2022" },
  {
    title: "Case title",
    number: "60aad570-71cd-4fcc-b441-3dacbed4619e",
    status: "Under consideration",
    date: "3 mei 2022",
  },
];

const messages: IMessageTableItem[] = [
  { organisation: "Buren", date: "3 mei 2022", id: "ceb3b7cb-0da2-4fcb-a1a5-69ed38852a28" },
  { organisation: "Utrecht", date: "12 oktober 2021", id: "f9aa6486-2ee9-4fc6-9c49-015ab4eb2afd" },
  { organisation: "Utrecht", date: "10 oktober 2021", id: "28661a53-5bb5-48e3-b055-7e2822e4f70f" },
  { organisation: "Buren", date: "15 september 2021", id: "7f4ca6d7-4b7e-4e3a-9b59-89087e6b1dab" },
  { organisation: "Buren", date: "13 september 2021", id: "60aad570-71cd-4fcc-b441-3dacbed4619e" },
];

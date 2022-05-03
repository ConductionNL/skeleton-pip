import * as React from "react";
import * as styles from "./OverviewTemplate.module.css";
import { Divider, Heading1, Heading3, Link, Tab, TabContext, TabPanel, Tabs } from "@gemeente-denhaag/components-react";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

export const OverviewTemplate: React.FC = () => {
  const { t } = useTranslation();

  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const [currentCasesTab, setCurrentCasesTab] = React.useState<number>(0);

  return (
    <div className={styles.container}>
      <Heading1 className={styles.heading}>{t("Overview")}</Heading1>

      <div className={styles.messages}>
        <div className={styles.messagesHeading}>
          <Heading3>{t("My messages")}</Heading3>

          <div onClick={() => navigate("/my-cases")}>
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
            className={styles.tabs}
          >
            <Tab label={t("Unread messages")} value={0} />
            <Tab label={t("Read messages")} value={1} />
          </Tabs>

          <TabPanel value="0">dingen hieasdfr</TabPanel>
          <TabPanel value="1">dingen hier</TabPanel>
        </TabContext>
      </div>

      <Divider />

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
            className={styles.tabs}
          >
            <Tab label={t("Current cases")} value={0} />
            <Tab label={t("Closed cases")} value={1} />
          </Tabs>

          <TabPanel value="0">dingen hieasdfr</TabPanel>
          <TabPanel value="1">dingen hier</TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

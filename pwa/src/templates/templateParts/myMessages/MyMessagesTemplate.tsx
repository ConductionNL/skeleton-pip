import * as React from "react";
import * as styles from "./MyMessagesTemplate.module.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { IMessageTableItem, MessagesTable } from "../../../components/messagesTable/MessagesTable";

export const MyMessagesTemplate: React.FC = () => {
  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading1>{t("My messages")}</Heading1>

      <TabContext value={currentMessagesTab.toString()}>
        <Tabs
          className="tabs"
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
  );
};

/**
 * Messages dummy data
 * REMOVE this data once the messages are retrieved from the gateway
 */

const messages: IMessageTableItem[] = [
  { organisation: "Buren", date: "3 mei 2022", id: "ceb3b7cb-0da2-4fcb-a1a5-69ed3882a28" },
  { organisation: "Utrecht", date: "12 oktober 2021", id: "f9aa6486-2ee9-4c6-9c49-015ab4eb2afd" },
  { organisation: "Utrecht", date: "10 oktober 2021", id: "28661a53-5bb5-483-b055-7e2822e4f70f" },
  { organisation: "Amsterdam", date: "15 september 2021", id: "7f4ca6d7-4b7e-4e3a-9b59-8987e6b1dab" },
  { organisation: "Buren", date: "13 september 2021", id: "60aad570-71cd-4fcc-b441-3daced4619e" },
  { organisation: "Buren", date: "3 mei 2022", id: "ceb3b7cb-0da2-4fcb-a1a5-69ed388228" },
  { organisation: "Utrecht", date: "12 oktober 2021", id: "f9aa6486-2ee9-4fc6-9c49-015ab4e2afd" },
  { organisation: "Utrecht", date: "10 oktober 2021", id: "28661a53-5bb5-48e3-b055-7e822e4f70f" },
  { organisation: "Deenhaag", date: "15 september 2021", id: "7f4ca6d7-4b7e-4e3a-9b59-8908e6b1dab" },
  { organisation: "Buren", date: "13 september 2021", id: "60aad570-71cd-4fcc-b441-3dacbe419e" },
  { organisation: "Buren", date: "3 mei 2022", id: "ceb3b7cb-0da2-4fcb-a1a5-69ed3885a28" },
  { organisation: "Utrecht", date: "12 oktober 2021", id: "f9aa6486-2ee9-4fc6-9c49-015a4b2afd" },
  { organisation: "Utrecht", date: "10 oktober 2021", id: "28661a53-5bb5-48e3-b055-7e2822ef70f" },
  { organisation: "Buren", date: "15 september 2021", id: "7f4ca6d7-4b7e-4e3a-9b59-89087e6b1db" },
  { organisation: "Buren", date: "13 september 2021", id: "60aad570-71cd-4fcc-b441-3dabed4619e" },
];

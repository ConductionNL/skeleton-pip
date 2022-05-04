import * as React from "react";
import * as styles from "./MyMessagesTemplate.module.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs, Card, CardProps } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

export const MyMessagesTemplate: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading1>{t("My messages")}</Heading1>

      <TabContext value={value.toString()}>
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
          }}
          className={styles.tabs}
        >
          <Tab label={t("Unread messages")} value={0} />
          <Tab label={t("Read messages")} value={1} />
        </Tabs>

        <TabPanel value="0">
          <div className={styles.grid}>
            {messages.map(({ title, subTitle, date, id }) => (
              <Card
                key={id}
                {...{ title, subTitle, date }}
                onClick={() => navigate(`/my-messages/${id}`)}
                variant="case"
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div className={styles.grid}>
            {messages.map(({ title, subTitle, date, id }) => (
              <Card
                key={id}
                {...{ title, subTitle, date }}
                onClick={() => navigate(`/my-messages/${id}`)}
                variant="case"
                archived
              />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

/**
 * Cases dummy data
 * REMOVE this data once the cases are retrieved from the gateway
 */
const messages: CardProps[] = [
  { title: "message 1", subTitle: "message subtitle 1", date: new Date(), id: "ceb3b7cb-0da2-4fcb-a1a5-69ed38852a28" },
  { title: "message 2", subTitle: "message subtitle 2", date: new Date(), id: "f9aa6486-2ee9-4fc6-9c49-015ab4eb2afd" },
  { title: "message 3", subTitle: "message subtitle 3", date: new Date(), id: "28661a53-5bb5-48e3-b055-7e2822e4f70f" },
  { title: "message 4", subTitle: "message subtitle 4", date: new Date(), id: "7f4ca6d7-4b7e-4e3a-9b59-89087e6b1dab" },
  { title: "message 5", subTitle: "message subtitle 5", date: new Date(), id: "4ed476e4-76ff-4ea6-b544-467901742630" },
  { title: "message 6", subTitle: "message subtitle 6", date: new Date(), id: "d97ea13e-3791-4aff-a360-9727dce460fe" },
  { title: "message 7", subTitle: "message subtitle 7", date: new Date(), id: "60aad570-71cd-4fcc-b441-3dacbed4619e" },
  { title: "message 8", subTitle: "message subtitle 8", date: new Date(), id: "13e6aa42-d781-4c71-9047-686a3fbc9295" },
  { title: "message 9", subTitle: "message subtitle 9", date: new Date(), id: "f16eb571-6484-4c4d-b4bb-6f0e14459bb4" },
  { title: "message 10", subTitle: "message subtitle 10", date: new Date(), id: "ea3e705e-e46d-44af-a5d5-c0bd0006cad8" },
];

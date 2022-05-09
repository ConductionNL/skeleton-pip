import * as React from "react";
import * as styles from "./MyMessagesTemplate.module.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import { useMessage } from "../../../hooks/message";
import Skeleton from "react-loading-skeleton";


export const MyMessagesTemplate: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [readMessages, setReadMessages] = React.useState<any[]>([]);
  const [unreadMessages, setUnreadMessages] = React.useState<any[]>([]);


  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const _useMessage = useMessage(queryClient);
  const getMessages = _useMessage.getAll();

  React.useEffect(() => {
    if (!getMessages.isSuccess) return;

    setReadMessages(getMessages.data.filter((_message) => _message.archiefstatus === "nog_te_archiveren"));
    setUnreadMessages(getMessages.data.filter((_message) => _message.archiefstatus !== "nog_te_archiveren"));
  }, [getMessages.isSuccess]);
console.log()
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

        {getMessages.isLoading && <Skeleton width="370pc" height="220px" />}




      </TabContext>
    </div>
  );
};

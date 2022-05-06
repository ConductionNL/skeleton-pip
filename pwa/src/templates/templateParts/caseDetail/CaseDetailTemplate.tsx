import * as React from "react";
import * as styles from "./CaseDetailTemplate.module.css";
import {
  Divider,
  Heading2,
  Heading3,
  Heading4,
  Link,
  Tab,
  TabContext,
  TabPanel,
  Tabs,
} from "@gemeente-denhaag/components-react";
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
import { MessagesTable } from "../../../components/messagesTable/MessagesTable";
import DummyMessages from "../../../data/DummyMessages";
import { MessageForm } from "../../../components/MessageForm/MessageForm";

interface CaseDetailTemplateProps {
  caseId: string;
}

export const CaseDetailTemplate: React.FC<CaseDetailTemplateProps> = ({ caseId }) => {
  const { t } = useTranslation();
  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);

  return (
    <div className={styles.container}>
      <div onClick={() => navigate("/my-cases")}>
        <Link icon={<ChevronLeftIcon />} iconAlign="start">
          {t("My cases")}
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

      <div className={styles.status}>
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

      <div className={styles.documents}>
        <div className={styles.documentsHeader}>
          <Heading3>{t("Documents")}</Heading3>

          <Link icon={<ArrowRightIcon />} iconAlign="end">
            {t("Show all documents")}
          </Link>
        </div>

        <DownloadCard
          layoutClassName={styles.downloadCard}
          icon={<DocumentIcon />}
          label="Bezwaar maken overige zaken - DigiD.pdf"
          sizeKb="134"
        />
      </div>

      <Divider />

      <div className={styles.messages}>
        <div className={styles.messagesHeading}>
          <Heading3>{t("Messages")}</Heading3>
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
      <div className={styles.messages}>
        <div className={styles.messagesHeading}>
          <Heading4>{t("Add another message to this case")}</Heading4>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

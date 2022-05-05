import * as React from "react";
import * as styles from "./CaseDetailTemplate.module.css";
import {
  Alert,
  Button,
  Divider,
  FormField,
  FormFieldInput,
  FormFieldLabel,
  Heading2,
  Heading3,
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
import { IMessageTableItem, MessagesTable } from "../../../components/messagesTable/MessagesTable";
import { InputTextArea } from "../../../components/formFields/input";
import { useForm } from "react-hook-form";

interface CaseDetailTemplateProps {
  caseId: string;
}

export const CaseDetailTemplate: React.FC<CaseDetailTemplateProps> = ({ caseId }) => {
  const { t } = useTranslation();

  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formError, setFormError] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {};

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
            <MessagesTable {...{ messages }} />
          </TabPanel>
          <TabPanel value="1">
            <MessagesTable messages={messages.map((message) => ({ ...message, isRead: false }))} />
          </TabPanel>
        </TabContext>
      </div>
      <form /*className={styles.form}*/ onSubmit={handleSubmit(onSubmit)}>
        {formError && <Alert text={formError} title={t("Oops, something went wrong")} variant="error" />}

        <FormField>
          <FormFieldInput>
            <FormFieldLabel>{t("Send message")}</FormFieldLabel>
            <InputTextArea {...{ register, errors }} name="message" validation={{ required: true }} />
          </FormFieldInput>
        </FormField>
        <Button size="large" type="submit" disabled={loading}>
          {t("Send")}
        </Button>
      </form>
    </div>
  );
};

const messages: IMessageTableItem[] = [
  { organisation: "Buren", date: "3 mei 2022", id: "ceb3b7cb-0da2-4fcb-a1a5-69ed38852a28" },
  { organisation: "Utrecht", date: "12 oktober 2021", id: "f9aa6486-2ee9-4fc6-9c49-015ab4eb2afd" },
  { organisation: "Utrecht", date: "10 oktober 2021", id: "28661a53-5bb5-48e3-b055-7e2822e4f70f" },
  { organisation: "Buren", date: "15 september 2021", id: "7f4ca6d7-4b7e-4e3a-9b59-89087e6b1dab" },
  { organisation: "Buren", date: "13 september 2021", id: "60aad570-71cd-4fcc-b441-3dacbed4619e" },
];

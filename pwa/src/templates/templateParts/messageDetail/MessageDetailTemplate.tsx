import * as React from "react";
import * as styles from "./MessageDetailTemplate.module.css";
import { Divider, Heading2, Heading3, Link, Paragraph } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronLeftIcon,
  SettingsIcon,
  StaffIcon,
  StarterIcon,
} from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { MetaIconGridTemplate } from "../metaIconGrid/MetaIconGridTemplate";

interface MessageDetailTemplateProps {
  messagesId: string;
}

export const MessageDetailTemplate: React.FC<MessageDetailTemplateProps> = ({ messagesId }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div onClick={() => navigate("/my-messages")}>
        <Link icon={<ChevronLeftIcon />} iconAlign="start">
          {t("My messages")}
        </Link>
      </div>

      <Heading2>{t("Previous contact moment")}</Heading2>

      <MetaIconGridTemplate
        metaIcons={[
          { icon: <StarterIcon />, label: t("Initiator"), value: "Gemeente" },
          { icon: <StaffIcon />, label: t("Collaborator"), value: "H. van de Ren" },
          { icon: <SettingsIcon />, label: t("Source organization"), value: "252852369" },
          { icon: <CalendarIcon />, label: t("Registration date"), value: "26 April 2022" },
        ]}
      />

      <Divider />

      <Paragraph>
        string Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources
        die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan
        antwoordt de provider met een lege HTTP 304 request. Zie MDN voor meer informatie.
      </Paragraph>

      <Divider />

      <div onClick={() => navigate("/my-cases")}>
        <Link icon={<ArrowRightIcon />} iconAlign="end">
          {t("View case")}
        </Link>
      </div>

    </div>
  );
};

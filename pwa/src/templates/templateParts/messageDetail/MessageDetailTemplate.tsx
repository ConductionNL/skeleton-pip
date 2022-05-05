import * as React from "react";
import * as styles from "./MessageDetailTemplate.module.css";
import { Divider, Heading2, Heading5, Link, TextField } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { CalendarIcon, ChevronLeftIcon, SettingsIcon, StaffIcon, StarterIcon } from "@gemeente-denhaag/icons";
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
      <div className={styles.header}>
        <Heading2>{t("Previous contact moment")}</Heading2>
        <Heading5>nld</Heading5>
      </div>

      <MetaIconGridTemplate
        metaIcons={[
          { icon: <StarterIcon />, label: t("Initiator"), value: "Gemeente" },
          { icon: <StaffIcon />, label: t("Collaborator"), value: "Name URL" },
          { icon: <SettingsIcon />, label: t("Source organization"), value: "252852369" },
          { icon: <CalendarIcon />, label: t("Registration date"), value: "26 April 2022" },
        ]}
      />

      <Divider />

      <TextField />

      <Divider />
    </div>
  );
};

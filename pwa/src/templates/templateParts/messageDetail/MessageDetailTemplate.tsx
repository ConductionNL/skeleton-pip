import * as React from "react";
import * as styles from "./MessageDetailTemplate.module.css";
import { Divider, Heading2, Heading3, Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ChevronLeftIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";

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
      <Heading2>Vorige contactmoment</Heading2>
    </div>
  );
};

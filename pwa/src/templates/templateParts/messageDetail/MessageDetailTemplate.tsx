import * as React from "react";
import * as styles from "./MessageDetailTemplate.module.css";
import { Divider, Heading1, Link, Paragraph } from "@gemeente-denhaag/components-react";
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
import dateFormat from "dateformat";

interface MessageDetailTemplateProps {
  messageId: string;
}

export const MessageDetailTemplate: React.FC<MessageDetailTemplateProps> = ({ messageId }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div onClick={() => navigate("/my-messages")}>
        <Link icon={<ChevronLeftIcon />} iconAlign="start">
          {t("My messages")}
        </Link>
      </div>

      <Heading1>{t("Previous contact moment")}</Heading1>

      <MetaIconGridTemplate
        metaIcons={[
          { icon: <StarterIcon />, label: t("Initiator"), value: "Gemeente" },
          { icon: <StaffIcon />, label: t("Collaborator"), value: "H. van de Ren" },
          { icon: <SettingsIcon />, label: t("Organization"), value: "252852369" },
          { icon: <CalendarIcon />, label: t("Registration date"), value: dateFormat(new Date(), "dd-mm-yyyy") },
        ]}
      />

      <Divider />

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
        risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
        porttitor.
        <br /> <br />
        Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor
        fringilla.
        <br /> <br />
        Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu
        leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </Paragraph>

      <Divider />

      <div onClick={() => navigate("/my-cases")}>
        <Link icon={<ArrowRightIcon />} iconAlign="start">
          {t("View the linked case")}
        </Link>
      </div>
    </div>
  );
};

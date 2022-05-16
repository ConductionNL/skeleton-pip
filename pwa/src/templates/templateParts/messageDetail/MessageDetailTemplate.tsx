import * as React from "react";
import * as styles from "./MessageDetailTemplate.module.css";
import { Divider, Heading3, Link, Paragraph, TabContext, TabPanel, Tabs } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { CalendarIcon, ChevronLeftIcon, SettingsIcon, StaffIcon, StarterIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { MetaIconGridTemplate } from "../metaIconGrid/MetaIconGridTemplate";
import { CasesTable } from "../../../components/casesTable/CasesTable";
import { useQueryClient } from "react-query";
import { useCase } from "../../../hooks/case";
import Skeleton from "react-loading-skeleton";

interface MessageDetailTemplateProps {
  messageId: string;
}

export const MessageDetailTemplate: React.FC<MessageDetailTemplateProps> = ({ messageId }) => {
  const { t } = useTranslation();
  const [currentCasesTab, setCurrentCasesTab] = React.useState<number>(0);
  const [linkedCases, setLinkedCases] = React.useState<any[]>([]);

  const queryClient = useQueryClient();

  const _useCase = useCase(queryClient);
  const getCases = _useCase.getAll();

  React.useEffect(() => {
    if (!getCases.isSuccess) return;

    setLinkedCases(getCases.data.filter((_case) => _case.archiefstatus === "nog_te_archiveren"));
  }, [getCases.isSuccess]);

  return (
    <div className={styles.container}>
      <div onClick={() => navigate("/my-messages")}>
        <Link icon={<ChevronLeftIcon />} iconAlign="start">
          {t("My messages")}
        </Link>
      </div>

      <MetaIconGridTemplate
        metaIcons={[
          { icon: <StarterIcon />, label: t("Initiator"), value: "Gemeente" },
          { icon: <StaffIcon />, label: t("Collaborator"), value: "H. van de Ren" },
          { icon: <SettingsIcon />, label: t("Organization"), value: "252852369" },
          { icon: <CalendarIcon />, label: t("Registration date"), value: "26 April 2022" },
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

      <TabContext value={currentCasesTab.toString()}>
        <Tabs
          value={currentCasesTab}
          onChange={(_, newValue: number) => {
            setCurrentCasesTab(newValue);
          }}
        ></Tabs>
        <Heading3>{t("The linked cases")}</Heading3>
        {getCases.isLoading && <Skeleton height="100px" />}

        <TabPanel value="0">{!getCases.isLoading && <CasesTable cases={linkedCases} />}</TabPanel>
      </TabContext>
    </div>
  );
};

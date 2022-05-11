import * as React from "react";
import * as styles from "./StartServiceTemplate.module.css";
import { Divider, Heading1, Link, Paragraph } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { ArrowRightIcon, ArrowLeftIcon } from "@gemeente-denhaag/icons";

interface StartServiceTemplateProps {
  title: string;
  description: string;
}

export interface IProcessSteps {
  step: string;
}

interface ProcessListProps {
  processSteps: IProcessSteps[];
}

export interface IMoreInformationLinks {
  description: string;
  link: string;
}

interface IMoreInformationListProps {
  moreInformationLinks: IMoreInformationLinks[];
}

export const StartServiceTemplate: React.FC<
  StartServiceTemplateProps & ProcessListProps & IMoreInformationListProps
> = ({ processSteps, moreInformationLinks, title, description }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div onClick={() => navigate("/self-services")}>
        <Link icon={<ArrowLeftIcon />} iconAlign="start">
          {t("Back")}
        </Link>
      </div>
      <div className={styles.title}>
        <Heading1>{t(`${title}`)}</Heading1>
        <Paragraph>{t(`${description}`)}</Paragraph>
      </div>

      <Divider />

      <div className={styles.process}>
        <Heading1>{t("What steps can you expect")}</Heading1>
        <ul>
          {processSteps.map(({ step }) => (
            <li className={styles.listItem}>{t(`${step}`)}</li>
          ))}
        </ul>
        <div onClick={() => navigate("/self-services/form")}>
          <Link icon={<ArrowRightIcon />} iconAlign="end">
            {t("Start")}
          </Link>
        </div>
      </div>

      <Divider />

      <div className={styles.info}>
        <Heading1>{t("More Information")}</Heading1>
        <ul>
          {moreInformationLinks.map((links) => (
            <li className={styles.listItem}>
              <div onClick={() => navigate(`${t(`${links.link}`)}`)}>
                <Link>{t(`${links.description}`)}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

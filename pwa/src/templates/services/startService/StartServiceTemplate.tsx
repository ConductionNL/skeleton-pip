import * as React from "react";
import * as styles from "./StartServiceTemplate.module.css";
import { Divider, Heading1, Link, Paragraph } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { ArrowRightIcon, ChevronRightIcon } from "@gemeente-denhaag/icons";

// export interface IStartServices {
//   title: string;
//   description: string;

// }

// interface StartServicesProps {
//   serviceProps: IStartServices[];
// }

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

export const StartServiceTemplate: React.FC<ProcessListProps & IMoreInformationListProps> = ({
  processSteps,
  moreInformationLinks,
}) => {
  const { t } = useTranslation();
  const bool = true;
  const title = bool ? "Mariage / Partnership" : "Moving";
  const subheader = bool ? "MarriageSub" : "MovingSub";
  const processExplanation = bool ? "MarriageProcess" : "MovingProcess";
  const moreInformation = bool ? "MarriageInfo" : "MovingInfo";

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Heading1>{t(`${title}`)}</Heading1>
          <Paragraph>{t(`${subheader}`)}</Paragraph>
        </div>

        <Divider />

        <div className={styles.process}>
          <Heading1>{t("What steps can you expect")}</Heading1>
          <ul>
            {processSteps.map(({ step }) => (
              <li className={styles.listItem}>{t(`${step}`)}</li>
            ))}
          </ul>
          <div onClick={() => navigate("/services/form")}>
            <Link icon={<ArrowRightIcon />} iconAlign="end">
              {t("Start")}
            </Link>
          </div>
        </div>

        <Divider />

        <div className={styles.info}>
          <Heading1>{t("More Information")}</Heading1>
          <ul>
            {moreInformationLinks.map((description, link) => (
              <li className={styles.listItem}>
                <div onClick={() => navigate(link)}>
                  <Link icon={<ArrowRightIcon />} iconAlign="end">
                    {t(`${description}`)}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

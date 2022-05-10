import * as React from "react";
import * as styles from "./StartServiceTemplate.module.css";
import { Divider, Heading1, Link, Paragraph } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { ArrowRightIcon, ChevronRightIcon } from "@gemeente-denhaag/icons";

export const StartServiceTemplate: React.FC = () => {
  const { t } = useTranslation();
  const bool = true;
  const title = bool ? "Mariage / Partnership" : "Moving";
  const subheader = bool ? "MarriageSub" : "MovingSub";
  const processExplanation = bool ? "MarriageProcess" : "MovingProcess";
  const moreInformation = bool ? "MarriageInfo" : "MovingInfo";

  const processSteps = t(`${processExplanation}`).split(".");
  console.log(processSteps);

  const moreInformationLinks = t(`${moreInformation}`).split("? ");
  console.log(moreInformationLinks);

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
            {processSteps.map((processStep: string) => (
              <li>{processStep}</li>
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
          <Paragraph>{t(`${moreInformation}`)}</Paragraph>
          <ul>
            {moreInformationLinks.map((moreInformationLink: string) => (
              <li>
                <Link icon={<ChevronRightIcon />} iconAlign="end">
                  {moreInformationLink}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

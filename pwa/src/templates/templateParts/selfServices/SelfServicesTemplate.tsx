import * as React from "react";
import * as styles from "./SelfServicesTemplate.module.css";
import { Heading1, Card } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";

export const SelfServicesTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading1>{t("Self services")}</Heading1>
      <div className={styles.grid}>
        <Card className={styles.card} title={t("Marriage / Partnership")} />
        <Card className={styles.card} title={t("Moving away")} />
        <Card className={styles.card} title={t("Birth registration")} />
        <Card className={styles.card} title={t("1st Registration")} />
      </div>
    </div>
  );
};

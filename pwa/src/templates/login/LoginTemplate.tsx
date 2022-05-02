import * as React from "react";
import * as styles from "./LoginTemplate.module.css";
import { Heading2 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../../components/loginForm/LoginForm";

export const LoginTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Heading2 className={styles.header}>{t("Login")}</Heading2>
        <LoginForm />
      </div>
    </div>
  );
};

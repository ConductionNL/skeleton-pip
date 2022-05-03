import { Heading1 } from "@gemeente-denhaag/components-react";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../../components/loginForm/LoginForm";
import "./LoginTemplate.css";

export const LoginTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="LoginTemplate">
      <div className="LoginTemplate-inner">
        <Heading1 className="LoginTemplate-inner-heading">{t("Login")}</Heading1>
        <LoginForm />
      </div>
    </div>
  );
};

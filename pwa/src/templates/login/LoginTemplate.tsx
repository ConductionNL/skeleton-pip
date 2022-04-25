import * as React from "react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../../components/loginForm/LoginForm";

export const LoginTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="LoginTemplate">
      <LoginForm />
    </div>
  );
};

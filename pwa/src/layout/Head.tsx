import * as React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../styling/index.css";

export const Head: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t("Persoonlijk Interactie Portaal")}</title>
      <script src="/env.js"></script>
    </Helmet>
  );
};

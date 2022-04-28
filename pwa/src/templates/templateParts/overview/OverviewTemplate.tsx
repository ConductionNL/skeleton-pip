import * as React from "react";
import { Button, Heading1 } from "@gemeente-denhaag/components-react";
import { isLoggedIn } from "../../../services/auth";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export const OverviewTemplate: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div>
      <Heading1>Overview</Heading1>
      <div>
        {isLoggedIn() ? (
          <Button onClick={() => changeLanguage(t("changeLanguage"))} variant="secondary-action">
            {t("Translation")}
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

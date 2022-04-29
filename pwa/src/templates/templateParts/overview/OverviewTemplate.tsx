import * as React from "react";
import { Button, Heading1 } from "@gemeente-denhaag/components-react";
import { isLoggedIn } from "../../../services/auth";
import { changeLanguage, t } from "i18next";
import { useTranslation } from "react-i18next";

export const OverviewTemplate: React.FC = () => <Heading1>{t("Overview")}</Heading1>;

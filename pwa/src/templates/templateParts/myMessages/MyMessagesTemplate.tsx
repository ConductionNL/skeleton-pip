import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { t } from "i18next";

export const MyMessagesTemplate: React.FC = () => <Heading1>{t("My messages")}</Heading1>;

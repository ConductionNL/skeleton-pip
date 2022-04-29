import * as React from "react";
import "./CurrentCasesTemplate.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs, Card, CardProps } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export const CurrentCasesTemplate: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  return (
    <div className="CurrentCasesTemplate">
      <Heading1>{t("Forms")}</Heading1>

      <TabContext value={value.toString()}>
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
          }}
          className="CurrentCasesTemplate-tabs"
        >
          <Tab label={t("Login")} value={0} />
          <Tab label={t("Closed cases")} value={1} />
        </Tabs>

        <TabPanel value="0">
          <div className="CurrentCasesTemplate-casesGrid">
            {cases.map(({ title, subTitle, date }) => (
              <Card {...{ title, subTitle, date }} variant="case" />
            ))}
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div className="CurrentCasesTemplate-casesGrid">
            {cases.map(({ title, subTitle, date }) => (
              <Card {...{ title, subTitle, date }} variant="case" archived />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

/**
 * Cases dummy data
 * REMOVE this data once the cases are retrieved from the gateway
 */
const cases: CardProps[] = [
  { title: `${t("Case")} 1`, subTitle: `${t("Case")} subtitle 1`, date: new Date() },
  { title: `${t("Case")} 2`, subTitle: `${t("Case")} subtitle 2`, date: new Date() },
  { title: `${t("Case")} 3`, subTitle: `${t("Case")} subtitle 3`, date: new Date() },
  { title: `${t("Case")} 4`, subTitle: `${t("Case")} subtitle 4`, date: new Date() },
  { title: `${t("Case")} 5`, subTitle: `${t("Case")} subtitle 5`, date: new Date() },
  { title: `${t("Case")} 6`, subTitle: `${t("Case")} subtitle 6`, date: new Date() },
  { title: `${t("Case")} 7`, subTitle: `${t("Case")} subtitle 7`, date: new Date() },
  { title: `${t("Case")} 8`, subTitle: `${t("Case")} subtitle 8`, date: new Date() },
  { title: `${t("Case")} 9`, subTitle: `${t("Case")} subtitle 9`, date: new Date() },
  { title: `${t("Case")} 10`, subTitle: `${t("Case")} subtitle 10`, date: new Date() },
];

import * as React from "react";
import "./CurrentCasesTemplate.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs, Card, CardProps } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

export const CurrentCasesTemplate: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  return (
    <div className="CurrentCasesTemplate">
      <Heading1>{t("Current cases")}</Heading1>

      <TabContext value={value.toString()}>
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
          }}
          className="CurrentCasesTemplate-tabs"
        >
          <Tab label={t("Current cases")} value={0} />
          <Tab label={t("Closed cases")} value={1} />
        </Tabs>

        <TabPanel value="0">
          <div className="CurrentCasesTemplate-casesGrid">
            {cases.map(({ title, subTitle, date, id }) => (
              <Card
                key={id}
                {...{ title, subTitle, date }}
                onClick={() => navigate(`/current-cases/${id}`)}
                variant="case"
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div className="CurrentCasesTemplate-casesGrid">
            {cases.map(({ title, subTitle, date, id }) => (
              <Card
                key={id}
                {...{ title, subTitle, date }}
                onClick={() => navigate(`/current-cases/${id}`)}
                variant="case"
                archived
              />
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
  { title: "Case 1", subTitle: "Case subtitle 1", date: new Date(), id: "ceb3b7cb-0da2-4fcb-a1a5-69ed38852a28" },
  { title: "Case 2", subTitle: "Case subtitle 2", date: new Date(), id: "f9aa6486-2ee9-4fc6-9c49-015ab4eb2afd" },
  { title: "Case 3", subTitle: "Case subtitle 3", date: new Date(), id: "28661a53-5bb5-48e3-b055-7e2822e4f70f" },
  { title: "Case 4", subTitle: "Case subtitle 4", date: new Date(), id: "7f4ca6d7-4b7e-4e3a-9b59-89087e6b1dab" },
  { title: "Case 5", subTitle: "Case subtitle 5", date: new Date(), id: "4ed476e4-76ff-4ea6-b544-467901742630" },
  { title: "Case 6", subTitle: "Case subtitle 6", date: new Date(), id: "d97ea13e-3791-4aff-a360-9727dce460fe" },
  { title: "Case 7", subTitle: "Case subtitle 7", date: new Date(), id: "60aad570-71cd-4fcc-b441-3dacbed4619e" },
  { title: "Case 8", subTitle: "Case subtitle 8", date: new Date(), id: "13e6aa42-d781-4c71-9047-686a3fbc9295" },
  { title: "Case 9", subTitle: "Case subtitle 9", date: new Date(), id: "f16eb571-6484-4c4d-b4bb-6f0e14459bb4" },
  { title: "Case 10", subTitle: "Case subtitle 10", date: new Date(), id: "ea3e705e-e46d-44af-a5d5-c0bd0006cad8" },
];

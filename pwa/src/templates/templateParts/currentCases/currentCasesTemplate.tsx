import * as React from "react";
import "./CurrentCasesTemplate.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs, Card, CardProps } from "@gemeente-denhaag/components-react";

export const CurrentCasesTemplate: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="CurrentCasesTemplate">
      <Heading1>Cases</Heading1>

      <TabContext value={value.toString()}>
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
          }}
          className="CurrentCasesTemplate-tabs"
        >
          <Tab label="Current cases" value={0} />
          <Tab label="Closed cases" value={1} />
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
  { title: "Case 1", subTitle: "Case subtitle 1", date: new Date() },
  { title: "Case 2", subTitle: "Case subtitle 2", date: new Date() },
  { title: "Case 3", subTitle: "Case subtitle 3", date: new Date() },
  { title: "Case 4", subTitle: "Case subtitle 4", date: new Date() },
  { title: "Case 5", subTitle: "Case subtitle 5", date: new Date() },
  { title: "Case 6", subTitle: "Case subtitle 6", date: new Date() },
  { title: "Case 7", subTitle: "Case subtitle 7", date: new Date() },
  { title: "Case 8", subTitle: "Case subtitle 8", date: new Date() },
  { title: "Case 9", subTitle: "Case subtitle 9", date: new Date() },
  { title: "Case 10", subTitle: "Case subtitle 10", date: new Date() },
];

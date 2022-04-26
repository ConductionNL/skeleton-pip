import * as React from "react";
import "./CurrentCasesTemplate.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs, Card } from "@gemeente-denhaag/components-react";

export const CurrentCasesTemplate: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="CurrentCasesTemplate">
      <Heading1>Cases</Heading1>

      <TabContext value={value.toString()}>
        <Tabs
          value={value}
          onChange={(_: React.ChangeEvent<unknown>, newValue: number) => {
            setValue(newValue);
          }}
          className="CurrentCasesTemplate-tabs"
        >
          <Tab label="Current cases" value={0} />
          <Tab label="Closed cases" value={1} />
        </Tabs>

        <TabPanel value="0">
          <div className="CurrentCasesTemplate-casesGrid">
            <Card title="Case 1" variant="case" />
            <Card title="Case 2" variant="case" />
            <Card title="Case 3" variant="case" />
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div className="CurrentCasesTemplate-casesGrid">
            <Card title="Case 1" variant="case" archived />
            <Card title="Case 2" variant="case" archived />
            <Card title="Case 3" variant="case" archived />
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

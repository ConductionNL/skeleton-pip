import { Button, Card } from "@gemeente-denhaag/components-react";
import * as React from "react";

export const LandingTemplate: React.FC = () => {
  return (
    <div className="LandingTemplate">
      Landing Template
      <Button variant="primary-action">Primary</Button>
      <Button variant="secondary-action">Secondary</Button>
      <Card title="Title" variant="case" subTitle="Subtitle"></Card>
    </div>
  );
};

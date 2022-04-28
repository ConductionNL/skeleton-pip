import * as React from "react";
import { Heading1 } from "@gemeente-denhaag/components-react";
import basicForm from "../../../dummy_data/form";

export const FormsTemplate: React.FC = () => {
  const [formIO, setFormIO] = React.useState(null);

  React.useEffect(() => {
    if (formIO) return;
    import("@formio/react").then((formio) => {
      const { Form } = formio;
      setFormIO(<Form form={basicForm} />);
    });
  }, [formIO]);

  return (
    <>
      <Heading1>Forms</Heading1>
      {formIO && formIO}
    </>
  );
};

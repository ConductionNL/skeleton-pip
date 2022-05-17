import * as React from "react";
import { DateFormStep, NewAdressFormStep, CoMoversStep } from "./steps";

export const MovingForm: React.FC = () => {
  const [step, setStep] = React.useState<"date" | "newAdress" | "coMovers" | "confirm">("date");

  switch (step) {
    case "date":
      return <DateFormStep setNextStep={() => setStep("newAdress")} />;

    case "newAdress":
      return <NewAdressFormStep setNextStep={() => setStep("coMovers")} setPreviousStep={() => setStep("date")} />;

    case "coMovers":
      return <CoMoversStep setNextStep={() => setStep("confirm")} setPreviousStep={() => setStep("newAdress")} />;

    case "confirm":
      return <>Confirm page here</>;
  }
};

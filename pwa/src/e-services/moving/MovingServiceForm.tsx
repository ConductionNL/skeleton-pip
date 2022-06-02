import * as React from "react";
import { IMovingServiceData, movingServiceData, MovingServiceProvider } from "./MovingServiceContext";
import { DateFormStep, NewAdressFormStep, CoMoversStep, ConfirmFormStep } from "./steps";

export type TMovingFormServiceSteps = "date" | "newAdress" | "coMovers" | "confirm";

export const MovingServiceForm: React.FC = () => {
  const [step, setStep] = React.useState<TMovingFormServiceSteps>("date");
  const [formData, setFormData] = React.useState<IMovingServiceData>(movingServiceData);

  return (
    <MovingServiceProvider value={[formData, setFormData]}>
      <MovingServiceFormStep {...{ step, setStep }} />
    </MovingServiceProvider>
  );
};

interface MovingServiceFormStepProps {
  step: TMovingFormServiceSteps;
  setStep: React.Dispatch<React.SetStateAction<TMovingFormServiceSteps>>;
}

const MovingServiceFormStep: React.FC<MovingServiceFormStepProps> = ({ step, setStep }) => {
  switch (step) {
    case "date":
      return <DateFormStep setNextStep={() => setStep("newAdress")} />;

    case "newAdress":
      return <NewAdressFormStep setNextStep={() => setStep("coMovers")} handleSetStep={setStep} />;

    case "coMovers":
      return <CoMoversStep setNextStep={() => setStep("confirm")} handleSetStep={setStep} />;

    case "confirm":
      return <ConfirmFormStep setPreviousStep={() => setStep("coMovers")} />;
  }
};
